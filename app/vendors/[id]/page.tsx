import { getVendorById } from '@/lib/vendors'
import { ProfileDetail } from '@/components/profile-detail'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

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

  return (
    <ProfileDetail
      type="vendors"
      name={vendor.name}
      website={vendor.website}
      content={vendor.content}
    />
  )
} 