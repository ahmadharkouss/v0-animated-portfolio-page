"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export function GradientText({ children, className, animate = false }: GradientTextProps) {
  return animate ? (
    <motion.span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end",
        className,
      )}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </motion.span>
  ) : (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end",
        className,
      )}
    >
      {children}
    </span>
  )
}
