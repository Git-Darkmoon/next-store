import { currentUser } from "@clerk/nextjs/server"
import { User2Icon } from "lucide-react"
import Image from "next/image"

async function UserIcon() {
  const user = await currentUser()

  const profileImage = user?.imageUrl
  if (profileImage)
    return (
      <Image
        src={profileImage as string}
        alt="profile image"
        width={24}
        height={24}
        className="size-6 rounded-full object-cover"
      />
    )
  return <User2Icon className="size-6 p-1 bg-primary rounded-full text-white" />
}
export default UserIcon
