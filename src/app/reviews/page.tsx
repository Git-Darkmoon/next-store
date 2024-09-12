import { IconButton } from "@/components/form/Buttons"
import FormContainer from "@/components/form/FormContainer"
import EmptyList from "@/components/global/EmptyList"
import SectionTitle from "@/components/global/SectionTitle"
import ReviewCard from "@/components/reviews/ReviewCard"
import { deleteReviewAction, fetchProductReviewsByUser } from "@/utils/actions"

async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser()

  if (reviews.length === 0)
    return <EmptyList heading="You have no reviews made yet" />

  return (
    <>
      <SectionTitle text="Your reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4">
        {reviews.map((review) => {
          const { comment, rating } = review
          const { name, image } = review.product

          const reviewInfo = { comment, rating, name, image }

          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          )
        })}
      </section>
    </>
  )
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId })
  return (
    <FormContainer action={deleteReview}>
      <IconButton action="delete" />
    </FormContainer>
  )
}

export default ReviewsPage
