"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, Calendar } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectIcon } from "@/components/project-icon"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  date?: string
  isConfidential?: boolean
}

export function ProjectCard({ title, description, image, tags, link, date, isConfidential }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <Card className="overflow-hidden h-full flex flex-col border border-gradient-start/20 relative">
        {/* Gradient accent in the corner */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20 rounded-bl-full -z-10"></div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectIcon title={title} tags={tags} />
        </motion.div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {date && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
          )}
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge variant="outline" className="border-gradient-start/30 bg-gradient-start/5">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          {isConfidential ? (
            <div className="w-full p-3 text-center bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border border-orange-200 dark:border-orange-800 rounded-md">
              <div className="flex items-center justify-center gap-2 text-orange-700 dark:text-orange-300 text-sm font-medium mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Startup SaaS Project
              </div>
              <p className="text-xs text-orange-600 dark:text-orange-400">
                Confidential - Source code and architectural details not available
              </p>
            </div>
          ) : (
            <motion.div className="w-full" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                variant="outline"
                className="w-full border-gradient-start/30 hover:bg-gradient-to-r hover:from-gradient-start/10 hover:via-gradient-middle/10 hover:to-gradient-end/10"
              >
                <Link href={link}>
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
