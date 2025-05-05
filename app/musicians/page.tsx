import { getAllMusicians } from '@/lib/musicians'
import { ProfileCard } from '@/components/profile-card'

export default async function MusiciansPage() {
  const musicians = await getAllMusicians()

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Musicians</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {musicians.map((musician) => (
            <ProfileCard
              key={musician.id}
              id={musician.id}
              name={musician.name}
              description={musician.blurb}
              linkPath="musicians"
              website={musician.website}
              showMore={musician.showMore}
            />
          ))}
        </div>
      </div>
    </main>
  )
}