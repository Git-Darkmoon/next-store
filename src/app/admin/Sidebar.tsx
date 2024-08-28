"use client"

import { Button } from "@/components/ui/button"
import { adminLinks } from "@/utils/links"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Sidebar() {
  const pathname = usePathname()

  return (
    <aside>
      {adminLinks.map((link) => {
        const { href, label } = link

        const isActivePage = pathname === href
        const classVariant = isActivePage ? "default" : "ghost"

        return (
          <Button
            key={href}
            variant={classVariant}
            className="w-full mb-2 capitalize font-normal justify-start"
            asChild
          >
            <Link href={href}>{label}</Link>
          </Button>
        )
      })}
    </aside>
  )
}
export default Sidebar
