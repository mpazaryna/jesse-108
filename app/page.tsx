import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SaveTheDate } from "../components/save-the-date"

export default function Home() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Welcome to Our Event
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Join us for an amazing experience on April 15-17, 2025
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button asChild>
            <Link href="/about">Learn More</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#register">Register Now</Link>
          </Button>
        </div>
      </div>

      <div className="py-8">
        <SaveTheDate />
      </div>

      <div id="register" className="w-full bg-muted -mx-4 md:-mx-6 px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Register Today</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Secure your spot at our event and be part of something special.
            </p>
          </div>
          <Button size="lg" className="mt-4">
            Sign Up Now
          </Button>
        </div>
      </div>
    </>
  )
}

