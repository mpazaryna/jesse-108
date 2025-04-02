import Link from 'next/link'
import { getAllSponsors } from '@/lib/sponsors'

export async function Sponsors() {
  const sponsors = await getAllSponsors()

  if (!sponsors.length) {
    return (
      <div className="text-center text-gray-500">
        No sponsors found. Please check the content/sponsors directory.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sponsors.map((sponsor) => (
        <Link
          key={sponsor.id}
          href={`/sponsors/${sponsor.id}`}
          className="block no-underline group"
        >
          <div className="h-full p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow hover:shadow-md transition-all group-hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-2 text-black">{sponsor.name}</h3>
            {sponsor.blurb && (
              <p className="text-gray-600 line-clamp-3">{sponsor.blurb}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
} 