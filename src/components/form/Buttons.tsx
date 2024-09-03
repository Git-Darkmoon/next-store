"use client"

import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { HeartFilledIcon, ReloadIcon } from "@radix-ui/react-icons"
import { Heart, Pencil, Trash2 } from "lucide-react"
import { SignInButton } from "@clerk/nextjs"

type btnSize = "default" | "lg" | "sm"

type SubmitButtonProps = {
  className?: string
  text?: string
  size?: btnSize
}

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn("capitalize", className)}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 size-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  )
}

type actionType = "edit" | "delete"

export const IconButton = ({ action }: { action: actionType }) => {
  const { pending } = useFormStatus()

  const renderIcon = () => {
    switch (action) {
      case "edit":
        return <Pencil />

      case "delete":
        return <Trash2 />

      default:
        const neverIcon: never = action
        throw new Error(`Invalid action type: ${neverIcon}`)
    }
  }

  return (
    <Button
      type="submit"
      size={"icon"}
      variant={"link"}
      className="p-2 cursor-pointer"
    >
      {pending ? <ReloadIcon className="animate-spin" /> : renderIcon()}
    </Button>
  )
}

export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size={"icon"}
        variant={"outline"}
        className="p-2 cursor-pointer"
        asChild
      >
        <Heart />
      </Button>
    </SignInButton>
  )
}

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      disabled={pending}
      size={"icon"}
      variant={"outline"}
      className="p-2 cursor-pointer"
      asChild
    >
      {pending ? (
        <ReloadIcon className="animate-spin" />
      ) : isFavorite ? (
        <HeartFilledIcon />
      ) : (
        <Heart />
      )}
    </Button>
  )
}
