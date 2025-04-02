import { SiteNav } from "@/components/site-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-5xl mx-auto flex h-14 items-center justify-between">
        <SiteNav />
        <ModeToggle />
      </div>
    </header>
  )
}

