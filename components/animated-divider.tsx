"use client"

import { motion } from "framer-motion"

interface AnimatedDividerProps {
  className?: string
}

export function AnimatedDivider({ className = "" }: AnimatedDividerProps) {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <motion.div
        className="h-1 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "5rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  )
}
