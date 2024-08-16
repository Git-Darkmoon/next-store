import { Button } from "@/components/ui/button"

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">HomePage</h1>
      <Button className="capitalize m-8" variant={"outline"} size={"lg"}>
        Click me
      </Button>
    </div>
  )
}
export default HomePage
