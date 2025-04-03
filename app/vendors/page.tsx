import { getAllVendors } from '@/lib/vendors'
import { ProfileCard } from '@/components/profile-card'

export default async function VendorsPage() {
  const vendors = await getAllVendors()

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Vendors</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor) => (
            <ProfileCard
              key={vendor.id}
              id={vendor.id}
              name={vendor.name}
              description={vendor.blurb}
              linkPath="vendors"
            />
          ))}
        </div>
      </div>
    </main>
  )
} 