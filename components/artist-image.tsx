import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ArtistImageProps {
  src: string
  alt: string
  className?: string
}

export function ArtistImage({ src, alt, className }: ArtistImageProps) {
  return (
    <div className={cn("relative aspect-[4/3] overflow-hidden rounded-lg", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>
  )
}
