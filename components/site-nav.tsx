'use client'

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import { mainNavItems } from "@/lib/navigation"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SiteNav() {
  const pathname = usePathname()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Menu className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <nav className="space-y-2">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex w-full items-center py-2 px-3 rounded-md hover:bg-muted transition-colors",
                pathname === item.href && "bg-muted"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  )
} 