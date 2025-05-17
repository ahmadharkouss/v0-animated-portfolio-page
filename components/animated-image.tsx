"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function AnimatedImage({ src, alt, width, height, className = "", priority = false }: AnimatedImageProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`relative overflow-hidden ${className}`}>
        {/* Background gradient circle */}
        <motion.div
          className="absolute -z-10 rounded-full bg-gradient-to-r from-gradient-start/30 via-gradient-middle/30 to-gradient-end/30 blur-xl"
          style={{ width: width * 1.2, height: height * 1.2, top: -height * 0.1, left: -width * 0.1 }}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="object-cover z-10 relative"
          priority={priority}
        />

        {/* Animated border effect */}
        <motion.div
          className="absolute inset-0 border-4 border-gradient-start/40 rounded-2xl z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        />

        {/* Corner accents */}
        <motion.div
          className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-gradient-start rounded-tl-2xl z-30"
          initial={{ opacity: 0, x: -10, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        />
        <motion.div
          className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-gradient-middle rounded-tr-2xl z-30"
          initial={{ opacity: 0, x: 10, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-gradient-middle rounded-bl-2xl z-30"
          initial={{ opacity: 0, x: -10, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-gradient-end rounded-br-2xl z-30"
          initial={{ opacity: 0, x: 10, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.9, duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}
