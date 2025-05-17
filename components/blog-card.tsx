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
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Calendar className="mr-2 h-4 w-4" />
            {date}
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{excerpt}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow"></CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href={link}>Read Article</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
