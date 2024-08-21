import { Card, CardContent } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

function LoadingContainer() {
  return (
    <div className="pt-24 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  )
}
export default LoadingContainer

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="mx-auto h-4 w-3/4 mt-4" />
        <Skeleton className="mx-auto h-3 w-1/4 mt-4" />
      </CardContent>
    </Card>
  )
}
