import { getAllInstructors } from '@/lib/instructors'
import { ProfileCard } from '@/components/profile-card'

export default async function InstructorsPage() {
  const instructors = await getAllInstructors()

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Instructors</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((instructor) => (
            <ProfileCard
              key={instructor.id}
              id={instructor.id}
              name={instructor.name}
              description={instructor.blurb}
              linkPath="instructors"
              showMore={instructor.showMore}
            />
          ))}
        </div>
      </div>
    </main>
  )
} 