'use client'

import * as React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface VendorGalleryProps {
  images: Array<{
    src: string
    alt: string
  }>
  className?: string
}

export function VendorGallery({ images, className }: VendorGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={cn("relative max-w-2xl mx-auto", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative flex-[0_0_100%] min-w-0 aspect-[4/3]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          ))}
        </div>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
} 