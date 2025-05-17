"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function AnimatedImage({ src, alt, width, height, className = "" }: AnimatedImageProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`relative overflow-hidden shadow-2xl ${className}`}>
        <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="object-cover" />

        {/* Animated overlay effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        {/* Animated border effect */}
        <motion.div
          className="absolute inset-0 border-4 border-gradient-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        />

        {/* Corner accents */}
        <motion.div
          className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-gradient-start"
          initial={{ opacity: 0, x: -10, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        />
        <motion.div
          className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-gradient-middle"
          initial={{ opacity: 0, x: 10, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-gradient-middle"
          initial={{ opacity: 0, x: -10, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-gradient-end"
          initial={{ opacity: 0, x: 10, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.9, duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}
