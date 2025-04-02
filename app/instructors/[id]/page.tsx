import { getInstructorById } from '@/lib/instructors'
import { ProfileDetail } from '@/components/profile-detail'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const instructor = await getInstructorById(params.id)
  
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
  const instructor = await getInstructorById(await Promise.resolve(params.id))

  if (!instructor) {
    notFound()
  }

  return (
    <ProfileDetail
      type="instructors"
      name={instructor.name}
      studio={instructor.studio}
      website={instructor.studioUrl}
      content={instructor.content}
    />
  )
} 