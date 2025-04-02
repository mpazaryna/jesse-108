'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function JesseSection() {
  return (
    <Card className="w-full bg-gradient-to-b from-background to-muted/50 border-muted-foreground/10">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight">Jesse</CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          In Memory and Honor
        </CardDescription>
      </CardHeader>
      <CardContent className="prose dark:prose-invert">
        <p>
          Jesse was a beloved member of our community, whose spirit and energy touched countless lives. 
          This event honors his memory by bringing together the yoga community he loved so dearly.
        </p>
        <p>
          Through 108 Sun Salutations, we celebrate Jesse's passion for yoga and his commitment to 
          building connections within our community. Each salutation represents a moment of gratitude 
          for the light he brought into our lives.
        </p>
      </CardContent>
    </Card>
  )
} 