import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import fs from 'fs'

interface Musician {
  id: string
  name: string
  website: string
  blurb: string
  content: string
  showMore?: boolean
}

export async function getAllMusicians(): Promise<Musician[]> {
  const musiciansDirectory = path.join(process.cwd(), 'content/musicians')
  const filenames = fs.readdirSync(musiciansDirectory)
  
  const musicians = await Promise.all(
    filenames.map(async (filename) => {
      const id = filename.replace(/\.mdx$/, '')
      const fullPath = path.join(musiciansDirectory, filename)
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
      } as Musician
    })
  )

  return musicians
}

export async function getMusicianById(id: string): Promise<Musician | undefined> {
  const musicians = await getAllMusicians()
  return musicians.find(musician => musician.id === id)
}
