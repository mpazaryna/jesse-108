import { getAllSponsors } from '@/lib/sponsors'
import { ProfileCard } from '@/components/profile-card'

export default async function SponsorsPage() {
  const sponsors = await getAllSponsors()

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Sponsors</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor) => (
            <ProfileCard
              key={sponsor.id}
              id={sponsor.id}
              name={sponsor.name}
              description={sponsor.blurb}
              linkPath="sponsors"
            />
          ))}
        </div>
      </div>
    </main>
  )
} 