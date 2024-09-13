import Link from "next/link"
import { Button } from "../ui/button"
import { ShoppingCart } from "lucide-react"
import { fetchCartItems } from "@/utils/actions"

async function CartButton() {
  const numItemsInCart = await fetchCartItems()

  return (
    <Button
      asChild
      variant={"outline"}
      size={"icon"}
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <ShoppingCart className="size-5" />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full size-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  )
}
export default CartButton
