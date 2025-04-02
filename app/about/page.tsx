import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Event</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Learn more about what makes our event special and why you should attend.
        </p>
      </div>

      <div className="w-full bg-muted -mx-4 md:-mx-6 px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 text-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2020, our event has grown from a small gathering to a major industry conference. We're
                dedicated to bringing together professionals, enthusiasts, and innovators to share knowledge and build
                connections.
              </p>
              <p className="text-muted-foreground">
                Each year, we focus on cutting-edge topics and provide a platform for both established leaders and
                emerging voices in the field.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">What to Expect</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Three days of inspiring talks and presentations</li>
                <li>Interactive workshops led by industry experts</li>
                <li>Networking opportunities with like-minded professionals</li>
                <li>Exhibition area showcasing the latest innovations</li>
                <li>Evening social events in a relaxed atmosphere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Us This Year</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Don't miss out on this opportunity to be part of our community.
        </p>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </>
  )
}

