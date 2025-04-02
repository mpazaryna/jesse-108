import { readFile, readdir } from 'fs/promises'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { NextResponse } from 'next/server'

interface Sponsor {
  id: string
  title: string
  description: string
}

export async function GET() {
  try {
    const sponsorsDirectory = path.join(process.cwd(), 'content/sponsors')
    const filenames = await readdir(sponsorsDirectory)
    
    const sponsors = await Promise.all(
      filenames
        .filter(filename => filename.endsWith('.md') || filename.endsWith('.mdx'))
        .map(async (filename) => {
          try {
            const id = filename.replace(/\.(md|mdx)$/, '')
            const fullPath = path.join(sponsorsDirectory, filename)
            const fileContents = await readFile(fullPath, 'utf8')

            const { frontmatter } = await compileMDX({
              source: fileContents,
              options: { parseFrontmatter: true }
            })

            if (!frontmatter || typeof frontmatter !== 'object') {
              throw new Error(`Invalid frontmatter for ${filename}`)
            }

            return {
              id,
              title: frontmatter.title || frontmatter.name || id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
              description: frontmatter.description || frontmatter.blurb || ''
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

    return NextResponse.json(validSponsors)
  } catch (error) {
    console.error('Error fetching sponsors:', error)
    return NextResponse.json({ error: 'Failed to fetch sponsors' }, { status: 500 })
  }
} 