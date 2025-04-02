'use client'

interface StudioLinkProps {
  url: string
  name: string
}

export function StudioLink({ url, name }: StudioLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="text-sm text-blue-600 hover:underline"
    >
      {name}
    </a>
  )
} 