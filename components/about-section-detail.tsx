'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

interface AboutSectionDetailProps {
  type: string
  title: string
  description: string
  content: React.ReactNode
}

export function AboutSectionDetail({ type, title, description, content }: AboutSectionDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 py-12 md:px-6">
        <div className="mb-8 flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="group">
            <Link href="/about">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to About
            </Link>
          </Button>
        </div>
        
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-4 mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              {title}
            </h1>
            
            <p className="text-xl text-muted-foreground font-medium">
              {description}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {content}
          </div>
        </article>
      </div>
    </motion.div>
  )
} 