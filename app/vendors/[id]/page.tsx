import { getVendorById } from '@/lib/vendors'
import { ProfileDetail } from '@/components/profile-detail'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { VendorImage } from '@/components/vendor-image'
import { VendorGallery } from '@/components/vendor-gallery'

interface Props {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const vendor = await getVendorById(id)
  
  if (!vendor) {
    return {
      title: 'Vendor Not Found'
    }
  }

  return {
    title: vendor.name,
    description: vendor.blurb
  }
}

export default async function VendorPage({ params }: Props) {
  const { id } = await params
  const vendor = await getVendorById(id)

  if (!vendor) {
    notFound()
  }

  const components = {
    VendorImage,
    VendorGallery
  }

  // Split content at the '---' markers after the frontmatter
  const parts = vendor.content.split('---').filter(Boolean)
  const textContent = parts[0]?.trim()
  const galleryContent = parts[1]?.trim()

  return (
    <ProfileDetail
      type="vendors"
      name={vendor.name}
      website={vendor.website}
      content={
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
            {galleryContent && (
              <MDXRemote
                source={galleryContent}
                components={components}
              />
            )}
          </div>
        </div>
      }
    />
  )
} 