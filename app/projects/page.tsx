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
      title: "IOT Smart Lock Management",
      description: "A complete smart lock system from scratch involving both hardware and software development for door lock and user group management",
      image: "/placeholder.svg?height=300&width=500",
      tags: [".NET", "C#", "Angular", "C", "IoT", "Hardware"],
      link: "https://github.com/ahmadharkouss/IOT-Smart-Lock-Management",
      date: "Mar 2024 - Jul 2024"
    },
    {
      title: "IIoT AI Agents at the Edge",
      description: "Edgentia is an industrial IoT edge platform that connects OPC UA devices to AI agents via MQTT, enabling real-time intelligent processing and analysis of industrial data at the edge. Features a modern visual pipeline builder for designing data flows between OPC UA servers, MQTT brokers, AI models (GPT-4o/Mistral), and time-series databases without coding.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Go", ".NET", "C#", "Python", "React", "MQTT", "OPC UA", "AI", "GPT-4o", "Mistral"],
      link: "#",
      date: "Jun 2025",
      isConfidential: true
    },
    {
      title: "Manufacturing Digital Twin",
      description: "Digital twin simulation tool that finds optimal manufacturing order based on XML configuration files",
      image: "/placeholder.svg?height=300&width=500",
      tags: [".NET", "C#", "Digital Twin", "Manufacturing", "Simulation"],
      link: "https://github.com/ahmadharkouss/digital-twin-.net",
      date: "Feb 2024 - May 2024"
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, animated personal portfolio website showcasing projects and skills with contact and scheduling functionality",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/ahmadharkouss/v0-animated-portfolio-page",
      date: "Mar 2025"
    },
    {
      title: "Ansible & Terraform Automation",
      description: "Automated workflow using Ansible & Terraform inside Docker containers to manage Gitea infrastructure with runners",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Ansible", "Terraform", "HCL", "Docker", "DevOps", "Infrastructure"],
      link: "https://github.com/ahmadharkouss/ansible_terraform_gitea",
      date: "Jan 2025"
    },
    {
      title: "Mini Twitter Backend",
      description: "Production-ready backend environment for a social platform web app similar to Twitter with Apache2 reverse proxy",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Node.js", "Backend", "Social Media", "Apache2", "REST API"],
      link: "https://github.com/ahmadharkouss/soa-mini-x",
      date: "May 2024"
    },
    {
      title: "MNIST Classifier MLOps",
      description: "MNIST classifier with comprehensive monitoring stack: Prometheus, Grafana, AlertManager, and OpenTelemetry for performance tracking",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["MLOps", "Prometheus", "Grafana", "OpenTelemetry", "Machine Learning", "Monitoring"],
      link: "https://github.com/ahmadharkouss/mlops-mnist",
      date: "Oct 2024"
    },
    {
      title: "Vision Transformer Implementation",
      description: "Simplified Vision Transformer (ViT) architecture implementation based on 'An Image is Worth 16x16 Words' paper by Dosovitskiy et al.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Jupyter Notebook", "Deep Learning", "Computer Vision", "Transformers"],
      link: "https://github.com/ahmadharkouss/dl-project",
      date: "Dec 2024"
    },
    {
      title: "Industrial AI Scraper",
      description: "AI tool that scrapes latest news for industrial companies, cleans data, and extracts key events for CRM integration",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "AI", "Web Scraping", "Data Processing", "CRM"],
      link: "https://github.com/ahmadharkouss/ai-scraper",
      date: "Oct 2025"
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
              Explore my complete portfolio of software engineering projects, from IoT and edge computing to AI/ML, 
              DevOps automation, and full-stack development solutions.
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
                date={project.date}
                isConfidential={project.isConfidential}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
