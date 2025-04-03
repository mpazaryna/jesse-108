'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function WhatToExpectSection() {
  return (
    <Card className="w-full bg-gradient-to-b from-background to-muted/50 border-muted-foreground/10">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight">What to Expect</CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          Your Journey Through 108 Sun Salutations
        </CardDescription>
      </CardHeader>
      <CardContent className="prose dark:prose-invert">
        <p>
          The practice of 108 Sun Salutations is a powerful and transformative experience. 
          You'll be guided through the traditional sequence by experienced instructors who will 
          offer modifications and support throughout the journey.
        </p>
        <ul>
          <li>Multiple instructors leading different segments</li>
          <li>Modifications available for all levels</li>
          <li>Water and rest breaks throughout</li>
          <li>Community support and encouragement</li>
          <li>Live music and inspiration</li>
        </ul>
        <p>
          Whether you're new to yoga or an experienced practitioner, this event is designed 
          to be accessible and meaningful for everyone.
        </p>
      </CardContent>
    </Card>
  )
} 