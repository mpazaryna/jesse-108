import { Calendar } from "lucide-react"

export function SaveTheDate() {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg border bg-card shadow-lg max-w-md mx-auto">
      <div className="flex items-center space-x-2 mb-6">
        <Calendar className="h-8 w-8 text-primary" />
        <h3 className="text-2xl font-semibold">Save the Date!</h3>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-primary">May 18, 2025</p>
        <p className="text-base text-muted-foreground mt-3">Don't miss out on this amazing event!</p>
      </div>
    </div>
  )
} 