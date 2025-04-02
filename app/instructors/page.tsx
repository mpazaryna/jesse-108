import Link from 'next/link'
import { getAllInstructors } from '@/lib/instructors'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { StudioLink } from '@/components/studio-link'

export default async function InstructorsPage() {
  const instructors = await getAllInstructors()

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Instructors</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((instructor) => (
            <Link key={instructor.id} href={`/instructors/${instructor.id}`}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{instructor.name}</CardTitle>
                  <div>
                    <StudioLink url={instructor.studioUrl} name={instructor.studio} />
                  </div>
                  <CardDescription className="mt-2">{instructor.blurb}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
} 