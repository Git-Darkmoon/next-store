import { cn } from "@/lib/utils"

function EmptyList({
  heading = "No items found.",
  className,
}: {
  heading?: string
  className?: string
}) {
  return <h2 className={cn("text-xl mt-4", className)}>{heading}</h2>
}
export default EmptyList
