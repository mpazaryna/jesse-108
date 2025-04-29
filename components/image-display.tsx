interface ImageDisplayProps {
  src: string
  alt: string
}

export function ImageDisplay({ src, alt }: ImageDisplayProps) {
  // Extract the filename from the path
  const filename = src.split('/').pop()?.split('.')[0]

  return (
    <div
      className={`relative w-full h-[300px] rounded-lg overflow-hidden ${filename}-image`}
      role="img"
      aria-label={alt}
    />
  )
}
