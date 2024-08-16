import Link from "next/link"
import { Button } from "../ui/button"
import { CodeXmlIcon } from "lucide-react"

function Logo() {
  return (
    <Button size={"icon"} asChild>
      <Link href="/">
        <CodeXmlIcon className="size-6" />
      </Link>
    </Button>
  )
}
export default Logo
