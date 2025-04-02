import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coming Soon - Jesse 108",
  description: "Jesse 108 - Coming Soon",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Jesse 108</h1>
        <p className="text-xl mb-8">Coming Soon</p>
        <p className="text-gray-600">We're working on something exciting. Stay tuned!</p>
      </div>
    </main>
  )
}

