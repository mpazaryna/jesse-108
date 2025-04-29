import { getInstructorById } from '@/lib/instructors'
import { ProfileDetail } from '@/components/profile-detail'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { InstructorPlaceholder } from '@/components/InstructorPlaceholder'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = await Promise.resolve(params.id)
  const instructor = await getInstructorById(id)
  
  if (!instructor) {
    return {
      title: 'Instructor Not Found'
    }
  }

  return {
    title: instructor.name,
    description: instructor.blurb
  }
}

export default async function InstructorPage({ params }: Props) {
  const id = await Promise.resolve(params.id)
  const instructor = await getInstructorById(id)

  if (!instructor) {
    notFound()
  }

  console.log('Rendering instructor page with content:', instructor.content)

  // If the content is empty or undefined, use the InstructorPlaceholder
  if (!instructor.content) {
    console.log('No content found, using placeholder')
    return (
      <ProfileDetail
        type="instructors"
        name={instructor.name}
        studio={instructor.studio}
        website={instructor.studioUrl}
        content={<InstructorPlaceholder />}
      />
    )
  }

  const components = {
    InstructorPlaceholder: InstructorPlaceholder
  }

  try {
    return (
      <ProfileDetail
        type="instructors"
        name={instructor.name}
        studio={instructor.studio}
        website={instructor.studioUrl}
        content={
          <div className="prose dark:prose-invert">
            <MDXRemote
              source={instructor.content}
              components={components}
              options={{
                parseFrontmatter: false,
                mdxOptions: {
                  development: process.env.NODE_ENV === 'development'
                }
              }}
            />
          </div>
        }
      />
    )
  } catch (error) {
    console.error('Error rendering MDX content:', error)
    return (
      <ProfileDetail
        type="instructors"
        name={instructor.name}
        studio={instructor.studio}
        website={instructor.studioUrl}
        content={<InstructorPlaceholder />}
      />
    )
  }
} 