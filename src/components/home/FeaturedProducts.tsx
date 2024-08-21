import { fetchFeaturedProducts } from "@/utils/actions"
import EmptyList from "@components/global/EmptyList"
import SectionTitle from "@components/global/SectionTitle"
import ProductsGrid from "@components/products/ProductsGrid"

async function FeaturedProducts() {
  const featuredProducts = await fetchFeaturedProducts()

  if (featuredProducts.length === 0) return <EmptyList />

  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={featuredProducts} />
    </section>
  )
}
export default FeaturedProducts
