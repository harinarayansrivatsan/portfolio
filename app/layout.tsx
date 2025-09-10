import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Montserrat, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Hari Narayan Srivatsan - AI Software Engineer",
  description: "AI Software Engineer | MS in MIS at Texas A&M University | Specializing in AI/ML Solutions",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${montserrat.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="font-sans bg-white">{children}</body>
    </html>
  )
}
