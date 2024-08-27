import { ADMIN_ROUTES, ROUTES } from "./routes"

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
  { href: ADMIN_ROUTES.SALES, label: "dashboard" },
]

export const adminLinks: NavLink[] = [
  { href: ADMIN_ROUTES.SALES, label: "sales" },
  { href: ADMIN_ROUTES.PRODUCTS, label: "my products" },
  { href: ADMIN_ROUTES.CREATE_PRODUCT, label: "create product" },
]
