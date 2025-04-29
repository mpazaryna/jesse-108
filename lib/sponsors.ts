import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

interface Sponsor {
  id: string
  name: string
  website: string
  blurb: string
  content: string
  showMore?: boolean
}

export async function getAllSponsors(): Promise<Sponsor[]> {
  const sponsorsDirectory = path.join(process.cwd(), 'content/sponsors')
  const filenames = fs.readdirSync(sponsorsDirectory)
  
  const sponsors = await Promise.all(
    filenames.map(async (filename) => {
      const id = filename.replace(/\.mdx$/, '')
      const fullPath = path.join(sponsorsDirectory, filename)
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
      } as Sponsor
    })
  )

  return sponsors
}

export async function getSponsorById(id: string): Promise<Sponsor | undefined> {
  const sponsors = await getAllSponsors()
  return sponsors.find(sponsor => sponsor.id === id)
} 