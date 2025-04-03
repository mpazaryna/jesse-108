import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import fs from 'fs'

interface Vendor {
  id: string
  name: string
  website: string
  blurb: string
  content: React.ReactNode
}

export async function getAllVendors(): Promise<Vendor[]> {
  const vendorsDirectory = path.join(process.cwd(), 'content/vendors')
  const filenames = fs.readdirSync(vendorsDirectory)
  
  const vendors = await Promise.all(
    filenames.map(async (filename) => {
      const id = filename.replace(/\.mdx$/, '')
      const fullPath = path.join(vendorsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const { frontmatter, content } = await compileMDX({
        source: fileContents,
        options: { parseFrontmatter: true }
      })

      return {
        id,
        ...frontmatter,
        content
      } as Vendor
    })
  )

  return vendors
}

export async function getVendorById(id: string): Promise<Vendor | undefined> {
  const vendors = await getAllVendors()
  return vendors.find(vendor => vendor.id === id)
} 