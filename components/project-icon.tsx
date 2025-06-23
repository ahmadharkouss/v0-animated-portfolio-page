"use client"

import { motion } from "framer-motion"
import { 
  Server, 
  Brain, 
  Settings, 
  Globe, 
  Database, 
  Monitor,
  Cpu,
  Shield,
  GitBranch,
  Eye,
  Wifi
} from "lucide-react"

interface ProjectIconProps {
  title: string
  tags: string[]
  className?: string
}

export function ProjectIcon({ title, tags, className = "" }: ProjectIconProps) {
  // Determine the primary icon based on project title and tags
  const getProjectIcon = () => {
    const titleLower = title.toLowerCase()
    const tagString = tags.join(" ").toLowerCase()

    if (titleLower.includes("iiot") || titleLower.includes("industrial ai") || titleLower.includes("ai agents")) {
      return { Icon: Cpu, color: "from-violet-500 to-purple-500" }
    }
    if (titleLower.includes("iot") || titleLower.includes("smart lock") || tagString.includes("iot")) {
      return { Icon: Wifi, color: "from-blue-500 to-cyan-500" }
    }
    if (titleLower.includes("digital twin") || titleLower.includes("manufacturing")) {
      return { Icon: Settings, color: "from-green-500 to-emerald-500" }
    }
    if (titleLower.includes("portfolio") || titleLower.includes("website") || tagString.includes("react")) {
      return { Icon: Globe, color: "from-orange-500 to-red-500" }
    }
    if (titleLower.includes("ai") || titleLower.includes("edge") || tagString.includes("ai")) {
      return { Icon: Brain, color: "from-purple-500 to-pink-500" }
    }
    if (titleLower.includes("terraform") || titleLower.includes("ansible") || tagString.includes("devops")) {
      return { Icon: Server, color: "from-indigo-500 to-blue-500" }
    }
    if (titleLower.includes("twitter") || titleLower.includes("backend") || tagString.includes("node")) {
      return { Icon: Database, color: "from-teal-500 to-green-500" }
    }
    if (titleLower.includes("mlops") || titleLower.includes("classifier") || tagString.includes("machine learning")) {
      return { Icon: Monitor, color: "from-yellow-500 to-orange-500" }
    }
    if (titleLower.includes("vision") || titleLower.includes("transformer") || tagString.includes("deep learning")) {
      return { Icon: Eye, color: "from-pink-500 to-rose-500" }
    }
    if (titleLower.includes("scraper") || titleLower.includes("ai tool")) {
      return { Icon: Cpu, color: "from-violet-500 to-purple-500" }
    }
    
    // Default
    return { Icon: GitBranch, color: "from-gray-500 to-slate-500" }
  }

  const { Icon, color } = getProjectIcon()

  return (
    <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${color} ${className}`}>
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, white 2px, transparent 2px)",
            "radial-gradient(circle at 80% 20%, white 2px, transparent 2px)",
            "radial-gradient(circle at 40% 80%, white 2px, transparent 2px)",
            "radial-gradient(circle at 20% 50%, white 2px, transparent 2px)",
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: "20px 20px"
        }}
      />

      {/* Main icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
          className="bg-white/20 backdrop-blur-sm rounded-full p-6 border border-white/30"
        >
          <Icon size={48} className="text-white drop-shadow-lg" />
        </motion.div>
      </div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0
        }}
      />
      <motion.div
        className="absolute top-8 right-6 w-1.5 h-1.5 bg-white/50 rounded-full"
        animate={{
          y: [0, -8, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-6 left-8 w-1 h-1 bg-white/60 rounded-full"
        animate={{
          y: [0, -6, 0],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 2
        }}
      />

      {/* Overlay gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
} 