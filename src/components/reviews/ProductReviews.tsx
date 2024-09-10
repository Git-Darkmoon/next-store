import { fetchProductReviews } from "@/utils/actions"
import SectionTitle from "../global/SectionTitle"
import EmptyList from "../global/EmptyList"
import ReviewCard from "./ReviewCard"

async function ProductReviews({ productId }: { productId: string }) {
  const reviews = await fetchProductReviews(productId)
  console.log(reviews)

  if (reviews.length === 0)
    return (
      <div className="my-8">
        <EmptyList heading="No reviews yet" />
      </div>
    )

  return (
    <div className="mt-16">
      <SectionTitle text="product reviews" />
      <div className="grid md:grid-cols-2 gap-8 my-8">
        {reviews.map((review) => {
          const { comment, rating, authorImageUrl, authorName } = review
          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
          }

          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />
        })}
      </div>
    </div>
  )
}
export default ProductReviews
