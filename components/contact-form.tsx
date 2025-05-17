"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    reset()
    setIsSubmitting(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative p-6 rounded-lg bg-card shadow-lg border border-gradient-start/20"
    >
      {/* Gradient accent in the corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20 rounded-bl-full -z-10"></div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Input
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
            className={`${errors.name ? "border-destructive" : "border-gradient-start/30 focus:border-gradient-start"}`}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`${errors.email ? "border-destructive" : "border-gradient-start/30 focus:border-gradient-start"}`}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Input
            placeholder="Subject"
            {...register("subject", { required: "Subject is required" })}
            className={`${errors.subject ? "border-destructive" : "border-gradient-start/30 focus:border-gradient-start"}`}
          />
          {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
        </div>

        <div className="space-y-2">
          <Textarea
            placeholder="Your Message"
            rows={5}
            {...register("message", { required: "Message is required" })}
            className={`${errors.message ? "border-destructive" : "border-gradient-start/30 focus:border-gradient-start"}`}
          />
          {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:opacity-90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </motion.div>
  )
}
