"use client"

import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"

export default function CaseStudiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isIndexPage = pathname === "/case-studies"

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {isIndexPage && (
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        )}
        {children}
      </div>
    </div>
  )
}
