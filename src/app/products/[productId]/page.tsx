import { fetchProductDetails } from "@/utils/actions"

async function ProductDetails({ params }: { params: { productId: string } }) {
  const { productId } = params

  const product = await fetchProductDetails(productId)

  console.log(product)

  return <div>ProductDetails</div>
}
export default ProductDetails
