import { SiteNav } from "@/components/site-nav"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-1">
        <div className="flex items-center">
          <SiteNav />
          <MainNav />
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}

