import { getSponsorById } from '@/lib/sponsors'
import { ProfileDetail } from '@/components/profile-detail'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sponsor = await getSponsorById(params.id)
  
  if (!sponsor) {
    return {
      title: 'Sponsor Not Found'
    }
  }

  return {
    title: sponsor.name,
    description: sponsor.blurb
  }
}

export default async function SponsorPage({ params }: Props) {
  const sponsor = await getSponsorById(params.id)

  if (!sponsor) {
    notFound()
  }

  return (
    <ProfileDetail
      type="sponsors"
      name={sponsor.name}
      website={sponsor.website}
      content={
        <div className="prose dark:prose-invert">
          <MDXRemote 
            source={sponsor.content}
            options={{
              parseFrontmatter: false,
              mdxOptions: {
                development: process.env.NODE_ENV === 'development'
              }
            }}
          />
        </div>
      }
    />
  )
} 