import { Input } from "../ui/input"
import { Label } from "../ui/label"

function ImageInput() {
  const name = "image"

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input id={name} type="file" name={name} accept="image/*" required />
    </div>
  )
}
export default ImageInput
