import { StarFilledIcon } from "@radix-ui/react-icons"

function ProductRating({ productId }: { productId: string }) {
  //temp
  const rating = 4.6
  const count = 25

  const className = `flex gap-1 items-center text-md mt-1 mb-4`
  const countValue = `(${count}) reviews`

  return (
    <span className={className}>
      <StarFilledIcon className="size-3" />
      {rating} {countValue}
    </span>
  )
}
export default ProductRating
