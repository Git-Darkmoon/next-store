"use server"

import db from "@/utils/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { imageSchema, productSchema, validateWithZodSchema } from "./schemas"
import { deleteImage, uploadImage } from "./supabase"
import { revalidatePath } from "next/cache"

const getAuthUser = async () => {
  const user = await currentUser()
  if (!user) redirect("/")

  return user
}

export const getAdminUser = async () => {
  const adminUser = await getAuthUser()
  if (adminUser.id !== process.env.ADMIN_USER_ID) redirect("/")
  return adminUser
}

const renderError = (
  error: unknown
): {
  message: string
} => {
  console.log(error)
  return {
    message: error instanceof Error ? error.message : "there was an error...",
  }
}

export const fetchFeaturedProducts = async () => {
  const featuredProducts = await db.product.findMany({
    where: {
      featured: true,
    },
  })
  return featuredProducts
}

// Technically is not necessary to put the fn async
// if you are not going to use the value from the query
// in this case we would like to only return it. But
// if it is wanted the previous syntax is valid too.

export const fetchAllProducts = ({ search = "" }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  })
}

export const fetchProductDetails = async (productId: string) => {
  const singleProduct = await db.product.findUnique({
    where: {
      id: productId,
    },
  })
  if (!singleProduct) redirect("/products")
  return singleProduct
}

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser()

  try {
    const rawData = Object.fromEntries(formData)
    const file = formData.get("image") as File
    const validatedFields = validateWithZodSchema(productSchema, rawData)
    const validateFile = validateWithZodSchema(imageSchema, { image: file })
    const fullPath = await uploadImage(validateFile.image)

    await db.product.create({
      data: {
        ...validatedFields,
        image: fullPath,
        clerkId: user.id,
      },
    })
  } catch (error) {
    return renderError(error)
  }
  redirect("/admin/products")
}

export const fetchAdminProducts = async () => {
  await getAdminUser()

  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
  return products
}

export const deleteProductAction = async (prevState: { productId: string }) => {
  const { productId } = prevState
  await getAdminUser()

  try {
    const product = await db.product.delete({
      where: {
        id: productId,
      },
    })

    await deleteImage(product.image)

    revalidatePath("/admin/products")
    return { message: "product removed" }
  } catch (error) {
    return renderError(error)
  }
}

export const fetchAdminProductsDetails = async (productId: string) => {
  await getAdminUser()
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  })
  if (!product) redirect("/admin/products")
  return product
}

export const updateProductAction = async (
  prevState: any,
  formData: FormData
) => {
  await getAdminUser()
  try {
    const productId = formData.get("id") as string
    const rawData = Object.fromEntries(formData)

    const validatedFields = validateWithZodSchema(productSchema, rawData)

    await db.product.update({
      where: {
        id: productId,
      },
      data: {
        ...validatedFields,
      },
    })
    revalidatePath(`/admin/products/${productId}/edit`)
    return { message: "Product updated successfully" }
  } catch (error) {
    return renderError(error)
  }
}
export const updateProductImageAction = async (
  prevState: any,
  formData: FormData
) => {
  await getAuthUser()
  try {
    const image = formData.get("image") as File
    const productId = formData.get("id") as string
    const oldImageUrl = formData.get("url") as string

    const validatedFile = validateWithZodSchema(imageSchema, { image })
    const fullPath = await uploadImage(validatedFile.image)
    await deleteImage(oldImageUrl)
    await db.product.update({
      where: {
        id: productId,
      },
      data: {
        image: fullPath,
      },
    })
    revalidatePath(`/admin/products/${productId}/edit`)
    return { message: "Product Image updated successfully" }
  } catch (error) {
    return renderError(error)
  }
}

export const toggleFavoriteAction = async () => {
  return { message: "toggle favorite action" }
}

export const fetchFavoriteId = async ({
  productId,
}: {
  productId: string
}): Promise<string | null> => {
  const user = await getAuthUser()
  const favorite = await db.favorite.findFirst({
    where: {
      productId,
      clerkId: user.id,
    },
    select: {
      id: true,
    },
  })
  return favorite?.id || null
}
