import { getArtistById } from '@/lib/artists'
import { ProfileDetail } from '@/components/profile-detail'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArtistImage } from '@/components/artist-image'
import { ArtistGallery } from '@/components/artist-gallery'

interface Props {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const artist = await getArtistById(id)

  if (!artist) {
    return {
      title: 'Artist Not Found'
    }
  }

  return {
    title: artist.name,
    description: artist.blurb
  }
}

export default async function ArtistPage({ params }: Props) {
  const { id } = await params
  const artist = await getArtistById(id)

  if (!artist) {
    notFound()
  }

  const components = {
    ArtistImage,
    ArtistGallery
  }

  // Split content at the '---' markers after the frontmatter
  const parts = artist.content.split('---').filter(Boolean)
  const textContent = parts[0]?.trim()
  const galleryContent = parts[1]?.trim()

  return (
    <ProfileDetail
      type="artists"
      name={artist.name}
      website={artist.website}
      content={
        galleryContent ? (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="prose dark:prose-invert">
              {textContent && (
                <MDXRemote
                  source={textContent}
                  components={components}
                />
              )}
            </div>
            <div className="md:sticky md:top-24">
              <MDXRemote
                source={galleryContent}
                components={components}
              />
            </div>
          </div>
        ) : (
          <div className="prose dark:prose-invert">
            {textContent && (
              <MDXRemote
                source={textContent}
                components={components}
              />
            )}
          </div>
        )
      }
    />
  )
}