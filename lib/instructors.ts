import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

interface Instructor {
  id: string
  name: string
  studio: string
  studioUrl: string
  blurb: string
  content: string
}

export async function getAllInstructors(): Promise<Instructor[]> {
  const instructorsDirectory = path.join(process.cwd(), 'content/instructors')
  const filenames = fs.readdirSync(instructorsDirectory)
  
  const instructors = await Promise.all(
    filenames.map(async (filename) => {
      const id = filename.replace(/\.mdx$/, '')
      const fullPath = path.join(instructorsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const { frontmatter, content } = await compileMDX({
        source: fileContents,
        options: { parseFrontmatter: true }
      })

      return {
        id,
        ...frontmatter,
        content
      } as Instructor
    })
  )

  return instructors
}

export async function getInstructorById(id: string): Promise<Instructor | undefined> {
  const instructors = await getAllInstructors()
  return instructors.find(instructor => instructor.id === id)
} 