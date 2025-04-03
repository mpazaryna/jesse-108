'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function LocationSection() {
  return (
    <Card className="w-full bg-gradient-to-b from-background to-muted/50 border-muted-foreground/10">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight">Location</CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          Join Us at The Yoga Sanctuary
        </CardDescription>
      </CardHeader>
      <CardContent className="prose dark:prose-invert">
        <p>
          The event will be held at The Yoga Sanctuary, a beautiful and serene space that 
          provides the perfect environment for our practice.
        </p>
        <div className="not-prose space-y-2">
          <p className="font-medium">Address:</p>
          <p className="text-muted-foreground">
            123 Peaceful Way<br />
            Portland, ME 04101
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Plenty of parking available. The venue is also accessible by public transportation.
          </p>
        </div>
      </CardContent>
    </Card>
  )
} 