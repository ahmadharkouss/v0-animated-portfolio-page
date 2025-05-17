"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { AnimatedTitle } from "@/components/animated-title"
import { AnimatedDivider } from "@/components/animated-divider"
import { PageTransition } from "@/components/page-transition"
import { useScrollTop } from "@/hooks/use-scroll-top"

export default function ProjectsPage() {
  // Scroll to top when the page loads
  useScrollTop()

  const projects = [
    {
      title: "Smart Home System",
      description: "An IoT-based smart home automation system with remote monitoring capabilities",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["IoT", "Raspberry Pi", "MQTT", "React"],
      link: "#",
    },
    {
      title: "Industrial Sensor Network",
      description: "Edge computing solution for real-time industrial sensor data processing",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Edge Computing", "LoRaWAN", "Time Series DB", "Python"],
      link: "#",
    },
    {
      title: "Agricultural Monitoring",
      description: "Low-power IoT system for monitoring soil conditions and automating irrigation",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["ESP32", "Sensors", "Solar Power", "Cloud Integration"],
      link: "#",
    },
    {
      title: "Smart City Traffic Management",
      description: "IoT solution for optimizing traffic flow and reducing congestion in urban areas",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Computer Vision", "Edge AI", "Traffic Sensors", "Dashboard"],
      link: "#",
    },
    {
      title: "Wearable Health Monitor",
      description: "Low-power wearable device for continuous health monitoring with cloud connectivity",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["BLE", "Embedded C", "Health Sensors", "Mobile App"],
      link: "#",
    },
    {
      title: "Energy Monitoring System",
      description: "Real-time energy consumption monitoring system for industrial facilities",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Power Meters", "Data Analytics", "Dashboard", "Energy Optimization"],
      link: "#",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="container py-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="flex flex-col items-center text-center mb-12">
            <AnimatedTitle title="All Projects" className="text-3xl md:text-4xl font-bold mb-4" />
            <AnimatedDivider />
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Explore my complete portfolio of IoT and edge computing projects, showcasing innovative solutions across
              various domains.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
