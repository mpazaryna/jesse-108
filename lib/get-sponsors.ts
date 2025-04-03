import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

export interface Sponsor {
  id: string
  title: string
  description: string
  content: any
}

export async function getSponsors(): Promise<Sponsor[]> {
  const sponsorsDirectory = path.join(process.cwd(), 'content/sponsors')
  const filenames = fs.readdirSync(sponsorsDirectory)
  
  const sponsors = await Promise.all(
    filenames
      .filter(filename => filename.endsWith('.md') || filename.endsWith('.mdx'))
      .map(async (filename) => {
        try {
          const id = filename.replace(/\.(md|mdx)$/, '')
          const fullPath = path.join(sponsorsDirectory, filename)
          const fileContents = fs.readFileSync(fullPath, 'utf8')

          const { frontmatter, content } = await compileMDX({
            source: fileContents,
            options: { parseFrontmatter: true }
          })

          return {
            id,
            title: frontmatter.title || frontmatter.name || '',
            description: frontmatter.description || frontmatter.blurb || '',
            content
          } as Sponsor
        } catch (error) {
          console.error(`Error processing ${filename}:`, error)
          return null
        }
      })
  )

  const validSponsors = sponsors
    .filter((sponsor): sponsor is Sponsor => sponsor !== null)
    .sort((a, b) => a.title.localeCompare(b.title))

  return validSponsors
} 