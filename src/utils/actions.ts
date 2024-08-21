import db from "@/utils/db"

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
