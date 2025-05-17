import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Ahmad Harkous",
  description: "Articles and insights on IoT and edge computing by Ahmad Harkous",
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
