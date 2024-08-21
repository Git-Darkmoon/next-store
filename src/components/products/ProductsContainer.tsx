import { fetchAllProducts } from "@/utils/actions"
import ProductsGrid from "./ProductsGrid"
import ProductsList from "./ProductsList"
import { Button } from "../ui/button"
import Link from "next/link"
import { LayoutGridIcon, ListIcon } from "lucide-react"
import { Separator } from "../ui/separator"
import EmptyList from "../global/EmptyList"
import { ROUTES } from "@/utils/routes"

async function ProductsContainer({
  layout,
  search,
}: {
  layout: string
  search: string
}) {
  const products = await fetchAllProducts({ search })
  const totalProducts = products.length

  const searchTerm = search ? `&search=${search}` : ""

  enum displayLayout {
    GRID = "grid",
    LIST = "list",
  }

  const renderProductsLayout = () => {
    if (totalProducts === 0) {
      return <EmptyList heading="Sorry, no products matched your search..." />
    }

    if (layout === displayLayout.GRID) {
      return <ProductsGrid products={products} />
    }

    return <ProductsList products={products} />
  }

  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              variant={layout === displayLayout.GRID ? "default" : "ghost"}
              size={"icon"}
              asChild
            >
              <Link
                href={`${ROUTES.PRODUCTS}?layout=${displayLayout.GRID}${searchTerm}`}
              >
                <LayoutGridIcon />
              </Link>
            </Button>
            <Button
              variant={layout === displayLayout.LIST ? "default" : "ghost"}
              size={"icon"}
              asChild
            >
              <Link
                href={`${ROUTES.PRODUCTS}?layout=${displayLayout.LIST}${searchTerm}`}
              >
                <ListIcon />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>

      {/* PRODUCTS */}
      <div>{renderProductsLayout()}</div>
    </>
  )
}
export default ProductsContainer
