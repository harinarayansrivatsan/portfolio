import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className={`relative z-10 flex-1 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}