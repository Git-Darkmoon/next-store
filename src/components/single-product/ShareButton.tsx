"use client"

import { Share2 } from "lucide-react"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share"

function ShareButton({ productId, name }: { productId: string; name: string }) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL
  const shareLink = `${url}/products/${productId}`
  const shareableText = `I'm happy to share the ${name} with you, here you can get it: `

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="p-2">
          <Share2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="center"
        sideOffset={10}
        className="flex items-center justify-center gap-x-2 w-full"
      >
        <FacebookShareButton url={shareLink} title={shareableText}>
          <FacebookIcon size={32} borderRadius={10} />
        </FacebookShareButton>
        <TwitterShareButton url={shareLink} title={shareableText}>
          <XIcon size={32} borderRadius={10} />
        </TwitterShareButton>
        <WhatsappShareButton url={shareLink} title={shareableText}>
          <WhatsappIcon size={32} borderRadius={10} />
        </WhatsappShareButton>
      </PopoverContent>
    </Popover>
  )
}
export default ShareButton
