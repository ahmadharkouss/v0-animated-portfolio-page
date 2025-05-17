"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown, Mail, Menu, MessageSquare, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ContactForm } from "@/components/contact-form"
import { ScheduleCall } from "@/components/schedule-call"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { ResumeSection } from "@/components/resume-section"
import { CaseStudyCard } from "@/components/case-study-card"
import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedTitle } from "@/components/animated-title"
import { PageTransition } from "@/components/page-transition"
import { AnimatedImage } from "@/components/animated-image"
import { GradientText } from "@/components/gradient-text"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Featured case studies for the homepage
  const featuredCaseStudies = [
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
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <AnimatedBackground />
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl">
              <GradientText animate>Ahmad Harkous</GradientText>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#about" className="text-sm font-medium hover:text-gradient-start transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-gradient-start transition-colors">
                Projects
              </Link>
              <Link href="#case-studies" className="text-sm font-medium hover:text-gradient-start transition-colors">
                Case Studies
              </Link>
              <Link href="#blog" className="text-sm font-medium hover:text-gradient-start transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-gradient-start transition-colors">
                Contact
              </Link>
              <Button
                asChild
                className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:opacity-90 text-white"
              >
                <Link href="#schedule">Schedule a Call</Link>
              </Button>
            </nav>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="#about" className="text-lg font-medium hover:text-gradient-start transition-colors">
                    About
                  </Link>
                  <Link href="#projects" className="text-lg font-medium hover:text-gradient-start transition-colors">
                    Projects
                  </Link>
                  <Link
                    href="#case-studies"
                    className="text-lg font-medium hover:text-gradient-start transition-colors"
                  >
                    Case Studies
                  </Link>
                  <Link href="#blog" className="text-lg font-medium hover:text-gradient-start transition-colors">
                    Blog
                  </Link>
                  <Link href="#contact" className="text-lg font-medium hover:text-gradient-start transition-colors">
                    Contact
                  </Link>
                  <Button
                    asChild
                    className="mt-2 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:opacity-90 text-white"
                  >
                    <Link href="#schedule">Schedule a Call</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ y, opacity }}
            className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-16"
          >
            {/* Left side - Text content */}
            <motion.div className="flex flex-col items-start text-left gap-6">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                Hi I am{" "}
                <GradientText animate className="block">
                  Ahmad Harkous
                </GradientText>
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl font-medium"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <GradientText>IOT & Edge Computing Engineer</GradientText>
              </motion.p>

              <motion.p
                className="max-w-[600px] text-lg text-muted-foreground"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                A passionate developer creating innovative solutions at the intersection of hardware and software.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:opacity-90 text-white"
                  >
                    <Link href="#projects">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-2 border-gradient-start/30 hover:border-gradient-middle/50 transition-colors"
                  >
                    <Link href="#contact">Get In Touch</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.4,
              }}
            >
              <AnimatedImage src="/placeholder.svg?height=500&width=400" alt="Ahmad Harkous" width={400} height={500} />
            </motion.div>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background" />
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="py-20 md:py-32 bg-gradient-to-r from-gradient-start/5 via-gradient-middle/5 to-gradient-end/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <AnimatedTitle title="About Me" className="text-3xl md:text-4xl font-bold mb-4" />
              <div className="w-20 h-1 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end mb-8"></div>
              <p className="max-w-[800px] text-muted-foreground text-lg">
                I'm a passionate IOT & Edge Computing Engineer with expertise in building innovative solutions that
                bridge the gap between hardware and software. Here's a glimpse of my professional journey and skills.
              </p>
            </div>
            <ResumeSection />
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="py-20 md:py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <AnimatedTitle title="My Projects" className="text-3xl md:text-4xl font-bold mb-4" />
              <div className="w-20 h-1 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end mb-8"></div>
              <p className="max-w-[800px] text-muted-foreground text-lg">
                Check out some of my recent work. These projects showcase my skills and expertise.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Smart Home System"
                description="An IoT-based smart home automation system with remote monitoring capabilities"
                image="/placeholder.svg?height=300&width=500"
                tags={["IoT", "Raspberry Pi", "MQTT", "React"]}
                link="#"
              />
              <ProjectCard
                title="Industrial Sensor Network"
                description="Edge computing solution for real-time industrial sensor data processing"
                image="/placeholder.svg?height=300&width=500"
                tags={["Edge Computing", "LoRaWAN", "Time Series DB", "Python"]}
                link="#"
              />
              <ProjectCard
                title="Agricultural Monitoring"
                description="Low-power IoT system for monitoring soil conditions and automating irrigation"
                image="/placeholder.svg?height=300&width=500"
                tags={["ESP32", "Sensors", "Solar Power", "Cloud Integration"]}
                link="#"
              />
            </div>
            <div className="flex justify-center mt-12">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gradient-start/30 hover:border-gradient-middle/50 transition-colors"
              >
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Case Studies Section */}
        <motion.section
          id="case-studies"
          className="py-20 md:py-32 bg-gradient-to-r from-gradient-start/5 via-gradient-middle/5 to-gradient-end/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <AnimatedTitle title="Case Studies" className="text-3xl md:text-4xl font-bold mb-4" />
              <div className="w-20 h-1 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end mb-8"></div>
              <p className="max-w-[800px] text-muted-foreground text-lg">
                Explore detailed case studies of my IoT implementations across various industries, showcasing real-world
                applications and technical solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study) => (
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
            </div>
            <div className="flex justify-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:opacity-90 text-white"
              >
                <Link href="/case-studies">
                  View All Case Studies <FileText className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="blog"
          className="py-20 md:py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <AnimatedTitle title="Blog & Articles" className="text-3xl md:text-4xl font-bold mb-4" />
              <div className="w-20 h-1 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end mb-8"></div>
              <p className="max-w-[800px] text-muted-foreground text-lg">
                I share my thoughts and insights on technology, development, and industry trends.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogCard
                title="Understanding React Hooks"
                excerpt="Learn how to use React Hooks to simplify your components and manage state effectively."
                date="May 15, 2023"
                image="/placeholder.svg?height=200&width=400"
                link="#"
              />
              <BlogCard
                title="The Future of Web Development"
                excerpt="Exploring emerging technologies and trends that will shape the future of web development."
                date="April 22, 2023"
                image="/placeholder.svg?height=200&width=400"
                link="#"
              />
              <BlogCard
                title="Optimizing Website Performance"
                excerpt="Tips and techniques to improve your website's loading speed and overall performance."
                date="March 10, 2023"
                image="/placeholder.svg?height=200&width=400"
                link="#"
              />
            </div>
            <div className="flex justify-center mt-12">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gradient-start/30 hover:border-gradient-middle/50 transition-colors"
              >
                <Link href="/blog">
                  Read More Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-20 md:py-32 bg-gradient-to-r from-gradient-start/5 via-gradient-middle/5 to-gradient-end/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <AnimatedTitle title="Get In Touch" className="text-3xl md:text-4xl font-bold mb-4" />
              <div className="w-20 h-1 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end mb-8"></div>
              <p className="max-w-[800px] text-muted-foreground text-lg">
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-gradient-start" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-gradient-middle" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Social Media</h3>
                    <div className="flex space-x-4 mt-2">
                      <Link href="#" className="text-muted-foreground hover:text-gradient-start transition-colors">
                        Twitter
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-gradient-middle transition-colors">
                        LinkedIn
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-gradient-end transition-colors">
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="schedule"
          className="py-20 md:py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <AnimatedTitle title="Schedule a Call" className="text-3xl md:text-4xl font-bold mb-4" />
              <div className="w-20 h-1 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end mb-8"></div>
              <p className="max-w-[800px] text-muted-foreground text-lg">
                Book a time slot that works for you, and let's discuss your project or any questions you might have.
              </p>
            </div>
            <ScheduleCall />
          </div>
        </motion.section>

        <footer className="bg-gradient-to-r from-gradient-start/10 via-gradient-middle/10 to-gradient-end/10 py-12 border-t">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <Link href="/" className="font-bold text-xl">
                  <GradientText>Ahmad Harkous</GradientText>
                </Link>
                <p className="mt-2 text-muted-foreground">Creating digital experiences that matter.</p>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <div className="flex space-x-4 mb-4">
                  <Button variant="ghost" size="icon" asChild className="hover:text-gradient-start">
                    <Link href="#">
                      <span className="sr-only">Twitter</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="hover:text-gradient-middle">
                    <Link href="#">
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="hover:text-gradient-end">
                    <Link href="#">
                      <span className="sr-only">GitHub</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Ahmad Harkous. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  )
}
