import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const aboutDirectory = path.join(process.cwd(), 'content/about')

export interface AboutSection {
  id: string
  title: string
  description: string
  content: string
}

export function getAllAboutSections(): AboutSection[] {
  const fileNames = fs.readdirSync(aboutDirectory)
  
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    return getAboutSectionById(id)
  })
}

export function getAboutSectionById(id: string): AboutSection {
  const fullPath = path.join(aboutDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    id,
    title: data.title,
    description: data.description,
    content
  }
} 