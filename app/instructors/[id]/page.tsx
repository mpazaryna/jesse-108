import { getInstructorById } from '@/lib/instructors'
import { Button } from '@/components/ui/button'
import { StudioLink } from '@/components/studio-link'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

export default async function InstructorPage({ params }: Props) {
  const instructor = await getInstructorById(params.id)

  if (!instructor) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:px-6">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/instructors">← Back to Instructors</Link>
          </Button>
        </div>
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            {instructor.name}
          </h1>
          
          <div className="mb-8">
            <StudioLink url={instructor.studioUrl} name={instructor.studio} />
          </div>

          <div className="mt-8">
            {instructor.content}
          </div>
        </article>
      </div>
    </main>
  )
} 