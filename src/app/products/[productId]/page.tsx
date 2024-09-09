import FavoriteToggleButton from "@/components/products/FavoriteToggleButton"
import ProductReviews from "@/components/reviews/ProductReviews"
import SubmitReview from "@/components/reviews/SubmitReview"
import AddToCart from "@/components/single-product/AddToCart"
import BreadCrumbs from "@/components/single-product/BreadCrumbs"
import ProductRating from "@/components/single-product/ProductRating"
import ShareButton from "@/components/single-product/ShareButton"
import { fetchProductDetails } from "@/utils/actions"
import { formatCurrency } from "@/utils/format"
import Image from "next/image"

async function ProductDetails({ params }: { params: { productId: string } }) {
  const { productId } = params

  const product = await fetchProductDetails(productId)
  const { name, image, company, description, price } = product
  const dollarsAmount = formatCurrency(price)

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative min-h-64 sm:h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded-md object-cover"
          />
        </div>

        {/* TEXT SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={productId} />
              <ShareButton name={product.name} productId={productId} />
            </div>
          </div>
          <ProductRating productId={productId} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={productId} />
        </div>
      </div>

      <ProductReviews productId={productId} />
      <SubmitReview productId={productId} />
    </section>
  )
}
export default ProductDetails
