"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutProfile() {
  return (
    <motion.div
      className="relative w-48 h-48 mx-auto mb-6"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
        <Image
          src="/images/profile-pic.jpg"
          alt="Ahmad Harkous"
          fill
          className="object-cover"
          style={{
            backgroundColor: "white",
            objectPosition: "center 30%", // Moved up by adjusting vertical position from 50% (default) to 30%
          }}
        />
      </div>

      {/* Simple subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full shadow-lg"
        style={{ boxShadow: "0 0 20px rgba(138, 35, 135, 0.15)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
    </motion.div>
  )
}
