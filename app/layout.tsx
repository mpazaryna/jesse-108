import type React from "react"
import "@/app/globals.css"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Jesse 108",
  description: "A fundraiser for Jesse",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <footer className="w-full border-t py-4">
              <div className="container max-w-5xl mx-auto flex justify-center">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Hare Aum
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'