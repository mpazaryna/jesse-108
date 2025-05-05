import Image from 'next/image'
import { cn } from '@/lib/utils'

interface MusicianImageProps {
  src: string
  alt: string
  className?: string
}

export function MusicianImage({ src, alt, className }: MusicianImageProps) {
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
