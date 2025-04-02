import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface ProfileCardProps {
  id: string
  name: string
  description: string
  linkPath: 'instructors' | 'sponsors' | 'vendors'
}

export function ProfileCard({ id, name, description, linkPath }: ProfileCardProps) {
  return (
    <Link href={`/${linkPath}/${id}`}>
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-background to-muted/50 border-muted-foreground/10">
        <CardHeader className="space-y-4">
          <CardTitle className="text-xl font-semibold tracking-tight hover:text-primary transition-colors">
            {name}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed text-muted-foreground/90">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
} 