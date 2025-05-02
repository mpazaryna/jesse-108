import { getAllArtists } from '@/lib/artists'
import { ProfileCard } from '@/components/profile-card'

export default async function ArtistsPage() {
  const artists = await getAllArtists()

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Musicians</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <ProfileCard
              key={artist.id}
              id={artist.id}
              name={artist.name}
              description={artist.blurb}
              linkPath="musicians"
              website={artist.website}
              showMore={artist.showMore}
            />
          ))}
        </div>
      </div>
    </main>
  )
}