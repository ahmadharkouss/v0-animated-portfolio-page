"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GradientText } from "@/components/gradient-text"

export function HeaderWithProgress() {
  const { scrollYProgress } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  // Effect to detect if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-sm shadow-sm" : "bg-background/50 backdrop-blur-sm"}`}
    >
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <GradientText animate>Ahmad Harkous</GradientText>
        </Link>

        {/* Desktop menu - right aligned */}
        <nav className="hidden md:flex items-center justify-end space-x-6 ml-auto">
          <Link href="#about" className="text-sm font-medium hover:text-gradient-start transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-gradient-start transition-colors">
            Projects
          </Link>
          <Link href="#case-studies" className="text-sm font-medium hover:text-gradient-start transition-colors">
            Case Studies
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-gradient-start transition-colors">
            Contact
          </Link>
          <Button
            asChild
            className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:opacity-90 text-white"
          >
            <Link href="#schedule">Schedule a Call</Link>
          </Button>
        </nav>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              <Link href="#about" className="text-lg font-medium hover:text-gradient-start transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-lg font-medium hover:text-gradient-start transition-colors">
                Projects
              </Link>
              <Link href="#case-studies" className="text-lg font-medium hover:text-gradient-start transition-colors">
                Case Studies
              </Link>
              <Link href="#contact" className="text-lg font-medium hover:text-gradient-start transition-colors">
                Contact
              </Link>
              <Button
                asChild
                className="mt-2 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:opacity-90 text-white"
              >
                <Link href="#schedule">Schedule a Call</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
