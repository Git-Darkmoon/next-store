import { ROUTES } from "./routes"

type NavLink = {
  href: string
  label: string
}

export const links: NavLink[] = [
  { href: ROUTES.HOME, label: "home" },
  { href: ROUTES.ABOUT, label: "about" },
  { href: ROUTES.PRODUCTS, label: "products" },
  { href: ROUTES.FAVORITES, label: "favorites" },
  { href: ROUTES.CART, label: "cart" },
  { href: ROUTES.ORDERS, label: "orders" },
]
