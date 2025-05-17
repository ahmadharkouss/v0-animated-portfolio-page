import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Ahmad Harkous",
  description: "IoT and edge computing projects by Ahmad Harkous",
}

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
