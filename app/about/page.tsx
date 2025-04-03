import { getAllAboutSections } from "@/lib/about"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "About - Jesse 108",
  description: "Learn more about the Jesse 108 Sun Salutations event",
}

export default async function AboutPage() {
  const sections = getAllAboutSections()

  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the Event</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link key={section.id} href={`/about/${section.id}`}>
            <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-background to-muted/50 border-muted-foreground/10">
              <CardHeader>
                <CardTitle className="text-xl font-semibold tracking-tight hover:text-primary transition-colors">
                  {section.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground/90">
                  {section.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

