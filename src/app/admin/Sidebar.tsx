import { Button } from "@/components/ui/button"
import { adminLinks } from "@/utils/links"
import Link from "next/link"

function Sidebar() {
  return (
    <aside>
      {adminLinks.map((link) => {
        const { href, label } = link

        return (
          <Button key={href} asChild>
            <Link href={href}>{label}</Link>
          </Button>
        )
      })}
    </aside>
  )
}
export default Sidebar
