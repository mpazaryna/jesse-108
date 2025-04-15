import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { InstructorPlaceholder } from '@/components/InstructorPlaceholder'

interface Instructor {
  id: string
  name: string
  studio: string
  studioUrl: string
  blurb: string
  content: string // Changed from any to string since we'll store the raw content
  showMore?: boolean
}

export async function getAllInstructors(): Promise<Instructor[]> {
  const instructorsDirectory = path.join(process.cwd(), 'content/instructors')
  const filenames = fs.readdirSync(instructorsDirectory)
  
  console.log('Processing instructor files:', filenames)
  
  const instructors = await Promise.all(
    filenames.map(async (filename) => {
      const id = filename.replace(/\.mdx$/, '')
      const fullPath = path.join(instructorsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Extract the frontmatter and content sections manually
      const [_, frontmatterStr, content] = fileContents.split('---')
      const frontmatterLines = frontmatterStr.trim().split('\n')
      const frontmatter: Record<string, string> = {}
      
      frontmatterLines.forEach(line => {
        const [key, ...valueParts] = line.split(':')
        if (key && valueParts.length > 0) {
          frontmatter[key.trim()] = valueParts.join(':').trim()
        }
      })

      console.log(`Processing ${filename}:`, {
        frontmatter,
        content: content.trim()
      })

      const instructor = {
        id,
        name: frontmatter.name || '',
        studio: frontmatter.studio || '',
        studioUrl: frontmatter.studioUrl || '',
        blurb: frontmatter.blurb || '',
        content: content.trim(),
        showMore: frontmatter.showMore === 'true'
      } as Instructor

      console.log(`Created instructor object for ${filename}:`, {
        ...instructor,
        content: instructor.content
      })

      return instructor
    })
  )

  return instructors
}

export async function getInstructorById(id: string): Promise<Instructor | undefined> {
  const instructors = await getAllInstructors()
  const instructor = instructors.find(instructor => instructor.id === id)
  if (instructor) {
    console.log('Found instructor:', {
      ...instructor,
      content: instructor.content
    })
  } else {
    console.log('No instructor found with id:', id)
  }
  return instructor
} 