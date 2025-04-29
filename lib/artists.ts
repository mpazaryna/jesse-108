import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import fs from 'fs'

interface Artist {
  id: string
  name: string
  website: string
  blurb: string
  content: string
  showMore?: boolean
}

export async function getAllArtists(): Promise<Artist[]> {
  const artistsDirectory = path.join(process.cwd(), 'content/artists')
  const filenames = fs.readdirSync(artistsDirectory)
  
  const artists = await Promise.all(
    filenames.map(async (filename) => {
      const id = filename.replace(/\.mdx$/, '')
      const fullPath = path.join(artistsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Split the content to get frontmatter and the rest
      const parts = fileContents.split('---')
      const frontmatterStr = parts[1]
      // Join the remaining parts back together to preserve all content sections
      const content = parts.slice(2).join('---')
      
      const frontmatter: Record<string, string> = {}
      frontmatterStr.trim().split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':')
        if (key && valueParts.length > 0) {
          frontmatter[key.trim()] = valueParts.join(':').trim()
        }
      })

      return {
        id,
        name: frontmatter.name || '',
        website: frontmatter.website || '',
        blurb: frontmatter.blurb || '',
        content: content.trim(),
        showMore: frontmatter.showMore === 'true'
      } as Artist
    })
  )

  return artists
}

export async function getArtistById(id: string): Promise<Artist | undefined> {
  const artists = await getAllArtists()
  return artists.find(artist => artist.id === id)
}
