import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SaveTheDate } from "../components/save-the-date"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to Our Event
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join us for an amazing experience on April 15-17, 2025
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#register">Register Now</Link>
                </Button>
              </div>
              <div className="mt-8">
                <SaveTheDate />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold">Keynote Speakers</h3>
                <p className="text-sm text-muted-foreground">Industry leaders sharing insights and innovations</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold">Workshops</h3>
                <p className="text-sm text-muted-foreground">Hands-on sessions to develop new skills</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold">Networking</h3>
                <p className="text-sm text-muted-foreground">Connect with peers and potential collaborators</p>
              </div>
            </div>
          </div>
        </section>

        <section id="register" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Register Today</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Secure your spot at our event and be part of something special.
                </p>
              </div>
              <Button size="lg" className="mt-4">
                Sign Up Now
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

