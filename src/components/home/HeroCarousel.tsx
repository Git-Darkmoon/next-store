"use client"

import { Card, CardContent } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

import img1 from "@images/heroCarousel_Img1.webp"
import img2 from "@images/heroCarousel_Img2.webp"
import img3 from "@images/heroCarousel_Img3.webp"
import img4 from "@images/heroCarousel_Img4.webp"
import Image, { StaticImageData } from "next/image"

const CarouselImages: StaticImageData[] = [img1, img2, img3, img4]

function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel className="w-full ">
        <CarouselContent>
          {CarouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={image}
                      alt="Luxury Furniture"
                      className="w-full h-[24rem] rounded-md object-cover"
                      priority
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
export default HeroCarousel
