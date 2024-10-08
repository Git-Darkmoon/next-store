// import { Prisma } from "@prisma/client"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

// Alternative to use the enum value coming from prisma
// Prisma.ProductScalarFieldEnum.price
const name = "price"

type FormInputNumberProps = {
  defaultValue?: number
}

function PriceInput({ defaultValue }: FormInputNumberProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        name={name}
        type="number"
        defaultValue={defaultValue || 100}
        min={0}
        required
      />
    </div>
  )
}
export default PriceInput
