import { getMusicianById } from '@/lib/musicians'
import { ProfileDetail } from '@/components/profile-detail'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { MusicianImage } from '@/components/musician-image'
import { MusicianGallery } from '@/components/musician-gallery'

interface Props {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const musician = await getMusicianById(id)

  if (!musician) {
    return {
      title: 'Musician Not Found'
    }
  }

  return {
    title: musician.name,
    description: musician.blurb
  }
}

export default async function MusicianPage({ params }: Props) {
  const { id } = await params
  const musician = await getMusicianById(id)

  if (!musician) {
    notFound()
  }

  const components = {
    MusicianImage,
    MusicianGallery
  }

  // Split content at the '---' markers after the frontmatter
  const parts = musician.content.split('---').filter(Boolean)
  const textContent = parts[0]?.trim()
  const galleryContent = parts[1]?.trim()

  return (
    <ProfileDetail
      type="musicians"
      name={musician.name}
      website={musician.website}
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