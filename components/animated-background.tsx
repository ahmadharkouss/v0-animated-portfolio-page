"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Define a type for the particles
type Particle = {
  id: number;
  width: number;
  height: number;
  left: string;
  top: string;
  xMove: number;
  yMove: number;
  duration: number;
  delay: number;
};

export function AnimatedBackground() {
  // State to hold the particles, initially empty
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Generate particles only on the client side to avoid hydration errors
  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      width: Math.floor(Math.random() * 100 + 50),
      height: Math.floor(Math.random() * 100 + 50),
      left: `${Math.floor(Math.random() * 100)}%`,
      top: `${Math.floor(Math.random() * 100)}%`,
      xMove: Math.floor(Math.random() * 100 - 50),
      yMove: Math.floor(Math.random() * 100 - 50),
      duration: Math.floor(Math.random() * 20 + 10),
      delay: Math.floor(Math.random() * 5)
    }));
    
    setParticles(generatedParticles);
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -inset-[100px] opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at center, #8a2387 0%, transparent 70%)",
          backgroundSize: "80% 80%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Navy gradient blob */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-gradient-start/20 to-gradient-middle/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Emerald gradient blob */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-gradient-middle/20 to-gradient-end/20 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 5,
        }}
      />

      {/* Only render particles if they have been generated on the client */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-gradient-start/10 to-gradient-end/10"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            x: [0, particle.xMove],
            y: [0, particle.yMove],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}
