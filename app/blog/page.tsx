"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog-card"
import { AnimatedTitle } from "@/components/animated-title"
import { AnimatedDivider } from "@/components/animated-divider"
import { PageTransition } from "@/components/page-transition"
import { useScrollTop } from "@/hooks/use-scroll-top"

export default function BlogPage() {
  // Scroll to top when the page loads
  useScrollTop()

  const blogPosts = [
    {
      title: "Understanding React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your components and manage state effectively.",
      date: "May 15, 2023",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the future of web development.",
      date: "April 22, 2023",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "Optimizing Website Performance",
      excerpt: "Tips and techniques to improve your website's loading speed and overall performance.",
      date: "March 10, 2023",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "IoT Security Best Practices",
      excerpt: "Essential security measures to protect your IoT devices and networks from vulnerabilities.",
      date: "February 28, 2023",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "Edge Computing vs. Cloud Computing",
      excerpt: "Comparing edge and cloud computing architectures for IoT applications and use cases.",
      date: "January 15, 2023",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "Getting Started with MQTT",
      excerpt: "A beginner's guide to implementing MQTT protocol for IoT device communication.",
      date: "December 5, 2022",
      image: "/placeholder.svg?height=200&width=400",
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
            <AnimatedTitle title="Blog & Articles" className="text-3xl md:text-4xl font-bold mb-4" />
            <AnimatedDivider />
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Insights, tutorials, and thoughts on IoT, edge computing, and web development.
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
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                image={post.image}
                link={post.link}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
