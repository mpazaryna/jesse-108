import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import fs from 'fs'

interface Vendor {
  id: string
  name: string
  website: string
  blurb: string
  content: string
  showMore?: boolean
}

export async function getAllVendors(): Promise<Vendor[]> {
  const vendorsDirectory = path.join(process.cwd(), 'content/vendors')
  const filenames = fs.readdirSync(vendorsDirectory)
  
  const vendors = await Promise.all(
    filenames.map(async (filename) => {
      const id = filename.replace(/\.mdx$/, '')
      const fullPath = path.join(vendorsDirectory, filename)
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
      } as Vendor
    })
  )

  return vendors
}

export async function getVendorById(id: string): Promise<Vendor | undefined> {
  const vendors = await getAllVendors()
  return vendors.find(vendor => vendor.id === id)
} 