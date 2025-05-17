"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Only render the toggle after component has mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return <div className="w-9 h-9"></div> // Placeholder to prevent layout shift
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-background/90 backdrop-blur-sm border border-border/40"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 scale-100 dark:scale-0 transition-transform" />
            <Moon className="absolute h-4 w-4 scale-0 dark:scale-100 transition-transform" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <span>Toggle theme</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
} 