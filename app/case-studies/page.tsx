"use client"

import { motion } from "framer-motion"

import { CaseStudyCard } from "@/components/case-study-card"
import { AnimatedTitle } from "@/components/animated-title"
import { AnimatedDivider } from "@/components/animated-divider"
import { PageTransition } from "@/components/page-transition"
import { useScrollTop } from "@/hooks/use-scroll-top"

export default function CaseStudiesPage() {
  // Scroll to top when the page loads
  useScrollTop()

  const caseStudies = [
    {
      id: "smart-city-monitoring",
      title: "Smart City Environmental Monitoring System",
      description:
        "Implementation of a city-wide environmental monitoring system with real-time air quality, noise, and traffic data collection.",
      image: "/placeholder.svg?height=300&width=600",
      industry: "Smart City",
      duration: "8 months",
      technologies: ["LoRaWAN", "Sensors", "Cloud Platform", "Data Analytics"],
    },
    {
      id: "industrial-predictive-maintenance",
      title: "Industrial Predictive Maintenance Solution",
      description:
        "Development of a predictive maintenance system for manufacturing equipment using vibration analysis and machine learning.",
      image: "/placeholder.svg?height=300&width=600",
      industry: "Manufacturing",
      duration: "6 months",
      technologies: ["Edge Computing", "ML", "Vibration Sensors", "MQTT"],
    },
    {
      id: "precision-agriculture",
      title: "Precision Agriculture Monitoring System",
      description:
        "Design and implementation of a comprehensive agricultural monitoring system for optimizing crop yield and resource usage.",
      image: "/placeholder.svg?height=300&width=600",
      industry: "Agriculture",
      duration: "12 months",
      technologies: ["Soil Sensors", "Weather Station", "Solar Power", "LoRa"],
    },
    {
      id: "healthcare-monitoring",
      title: "Remote Patient Monitoring Platform",
      description:
        "Creation of a secure IoT platform for remote patient monitoring, enabling real-time health data collection and analysis.",
      image: "/placeholder.svg?height=300&width=600",
      industry: "Healthcare",
      duration: "10 months",
      technologies: ["BLE", "Wearables", "HIPAA Compliance", "Edge Analytics"],
    },
    {
      id: "energy-management",
      title: "Smart Building Energy Management",
      description:
        "Implementation of an intelligent energy management system for commercial buildings to optimize energy consumption.",
      image: "/placeholder.svg?height=300&width=600",
      industry: "Energy",
      duration: "9 months",
      technologies: ["Zigbee", "Smart Meters", "HVAC Control", "Dashboard"],
    },
    {
      id: "retail-analytics",
      title: "Retail Customer Analytics System",
      description:
        "Deployment of an in-store customer analytics solution using IoT sensors to track foot traffic and optimize store layout.",
      image: "/placeholder.svg?height=300&width=600",
      industry: "Retail",
      duration: "5 months",
      technologies: ["BLE Beacons", "WiFi Tracking", "Heat Mapping", "Analytics"],
    },
  ]

  return (
    <PageTransition>
      <div className="py-8">
        <div className="flex flex-col items-center text-center mb-12">
          <AnimatedTitle title="IoT Implementation Case Studies" className="text-3xl md:text-4xl font-bold mb-4" />
          <AnimatedDivider />
          <p className="max-w-[800px] text-muted-foreground text-lg">
            Explore detailed case studies of IoT implementations across various industries, showcasing real-world
            applications and technical solutions.
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
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              id={study.id}
              title={study.title}
              description={study.description}
              image={study.image}
              industry={study.industry}
              duration={study.duration}
              technologies={study.technologies}
            />
          ))}
        </motion.div>
      </div>
    </PageTransition>
  )
}
