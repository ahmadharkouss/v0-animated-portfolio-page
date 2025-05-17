"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  link: string
}

export function BlogCard({ title, excerpt, date, image, link }: BlogCardProps) {
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
          className="relative h-48 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gradient-start/30 via-gradient-middle/30 to-gradient-end/30 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <CardHeader>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Calendar className="mr-2 h-4 w-4 text-gradient-start" />
            {date}
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{excerpt}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow"></CardContent>
        <CardFooter>
          <motion.div className="w-full" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              asChild
              variant="outline"
              className="w-full border-gradient-start/30 hover:bg-gradient-to-r hover:from-gradient-start/10 hover:via-gradient-middle/10 hover:to-gradient-end/10"
            >
              <Link href={link}>Read Article</Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
