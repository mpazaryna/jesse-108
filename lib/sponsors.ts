import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

interface Sponsor {
  id: string
  name: string
  website: string
  blurb: string
  content: string
}

export async function getAllSponsors(): Promise<Sponsor[]> {
  const sponsorsDirectory = path.join(process.cwd(), 'content/sponsors')
  const filenames = fs.readdirSync(sponsorsDirectory)
  
  const sponsors = await Promise.all(
    filenames.map(async (filename) => {
      const id = filename.replace(/\.mdx$/, '')
      const fullPath = path.join(sponsorsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const { frontmatter, content } = await compileMDX({
        source: fileContents,
        options: { parseFrontmatter: true }
      })

      return {
        id,
        ...frontmatter,
        content
      } as Sponsor
    })
  )

  // Sort sponsors alphabetically by name
  return sponsors.sort((a, b) => a.name.localeCompare(b.name))
}

export async function getSponsorById(id: string): Promise<Sponsor | undefined> {
  const sponsors = await getAllSponsors()
  return sponsors.find(sponsor => sponsor.id === id)
} 