'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProfileDetailProps {
  type: 'instructors' | 'sponsors'
  name: string
  website?: string
  studio?: string
  content: React.ReactNode
}

export function ProfileDetail({ type, name, website, studio, content }: ProfileDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 py-12 md:px-6">
        <div className="mb-8 flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="group">
            <Link href={`/${type}`}>
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to {type.charAt(0).toUpperCase() + type.slice(1)}
            </Link>
          </Button>
        </div>
        
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-4 mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              {name}
            </h1>
            
            {studio && (
              <p className="text-xl text-muted-foreground font-medium">
                {studio}
              </p>
            )}

            {website && (
              <a 
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors no-underline"
              >
                Visit Website
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="mt-8 space-y-6">
            {content}
          </div>
        </article>
      </div>
    </motion.div>
  )
} 