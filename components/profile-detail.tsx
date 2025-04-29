'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProfileDetailProps {
  type: 'instructors' | 'sponsors' | 'vendors'
  name: string
  website?: string
  studio?: string
  content: React.ReactNode
}

export function ProfileDetail({ type, name, website, studio, content }: ProfileDetailProps) {
  return (
    <div className="container max-w-3xl px-4 pt-2 pb-12 md:px-6">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="group -ml-2">
          <Link href={`/${type}`}>
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to {type.charAt(0).toUpperCase() + type.slice(1)}
          </Link>
        </Button>
      </div>

      <article className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {name}
          </h1>

          {studio && (
            <p className="text-lg text-muted-foreground">
              {studio}
            </p>
          )}

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors no-underline text-sm font-medium"
            >
              Visit Website
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </header>

        <div className="prose prose-slate dark:prose-invert">
          {content}
        </div>
      </article>
    </div>
  )
} 