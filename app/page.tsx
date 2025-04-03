import { Metadata } from "next"
import { Header } from "@/components/header"
import { NavigationMenu } from "@/components/ui/navigation-menu"

export const metadata: Metadata = {
  title: "Jesse 108",
  description: "Jesse 108 - A Celebration with 108 Sun Salutations",
}

export default function Home() {
  // More strict boolean conversion
  const showNavigation = process.env.NEXT_PUBLIC_SHOW_NAVIGATION === 'true'

  return (
    <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 md:px-6 space-y-12 py-8">
      <div className="text-center">
        <Header />
        {showNavigation && <NavigationMenu />}
      </div>
    </div>
  )
}

