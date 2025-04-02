'use client'

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"

export function SiteNav() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Menu className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <nav className="space-y-2">
          <Link 
            href="/" 
            className="flex w-full items-center py-2 px-3 rounded-md hover:bg-muted transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/instructors" 
            className="flex w-full items-center py-2 px-3 rounded-md hover:bg-muted transition-colors"
          >
            Instructors
          </Link>
          <Link 
            href="/sponsors" 
            className="flex w-full items-center py-2 px-3 rounded-md hover:bg-muted transition-colors"
          >
            Sponsors
          </Link>
          <Link 
            href="/about" 
            className="flex w-full items-center py-2 px-3 rounded-md hover:bg-muted transition-colors"
          >
            About
          </Link>
        </nav>
      </PopoverContent>
    </Popover>
  )
} 