"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown, Mail, Menu, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ContactForm } from "@/components/contact-form"
import { ScheduleCall } from "@/components/schedule-call"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { ResumeSection } from "@/components/resume-section"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild>
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
                <Link href="#about" className="text-lg font-medium hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#projects" className="text-lg font-medium hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="#blog" className="text-lg font-medium hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
                  Contact
                </Link>
                <Button asChild className="mt-2">
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
          className="container relative z-10 flex flex-col items-center text-center gap-6 pt-16"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full border-4 border-primary"
            />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm <span className="text-primary">Your Name</span>
          </motion.h1>
          <motion.p
            className="max-w-[700px] text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A passionate developer creating beautiful digital experiences
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
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
        className="py-20 md:py-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              I'm a passionate developer with expertise in building modern web applications. Here's a glimpse of my
              professional journey and skills.
            </p>
          </div>
          <ResumeSection />
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="py-20 md:py-32 bg-muted/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Check out some of my recent work. These projects showcase my skills and expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Project One"
              description="A web application built with React and Node.js"
              image="/placeholder.svg?height=300&width=500"
              tags={["React", "Node.js", "MongoDB"]}
              link="#"
            />
            <ProjectCard
              title="Project Two"
              description="An e-commerce platform with payment integration"
              image="/placeholder.svg?height=300&width=500"
              tags={["Next.js", "Stripe", "Tailwind CSS"]}
              link="#"
            />
            <ProjectCard
              title="Project Three"
              description="A mobile app for tracking fitness goals"
              image="/placeholder.svg?height=300&width=500"
              tags={["React Native", "Firebase", "Redux"]}
              link="#"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog & Articles</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
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
            <Button variant="outline" size="lg">
              Read More Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="py-20 md:py-32 bg-muted/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Twitter
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      LinkedIn
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule a Call</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Book a time slot that works for you, and let's discuss your project or any questions you might have.
            </p>
          </div>
          <ScheduleCall />
        </div>
      </motion.section>

      <footer className="bg-muted py-12 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="font-bold text-xl">
                Portfolio
              </Link>
              <p className="mt-2 text-muted-foreground">Creating digital experiences that matter.</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <Button variant="ghost" size="icon" asChild>
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
                <Button variant="ghost" size="icon" asChild>
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
                <Button variant="ghost" size="icon" asChild>
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
                © {new Date().getFullYear()} Your Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
