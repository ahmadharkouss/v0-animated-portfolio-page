"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Loader2, CheckCircle, Mail, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setUserEmail(data.email)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      reset()
      setIsSubmitted(true)
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again later.",
      })
      setIsSubmitted(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative p-6 rounded-lg bg-card shadow-lg border border-gradient-start/20 text-center"
      >
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-medium mt-4">Message Sent Successfully!</h3>
          <p className="text-muted-foreground max-w-md">
            Thank you for reaching out. I've received your message and will respond as soon as possible.
          </p>
          <div className="mt-4 p-4 bg-gradient-start/5 rounded-lg border border-gradient-start/10 flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gradient-start" />
            <p className="text-sm">
              A confirmation email has been sent to <span className="font-medium">{userEmail}</span>
            </p>
          </div>
          <Button 
            onClick={() => setIsSubmitted(false)} 
            variant="outline" 
            className="mt-6"
          >
            Send Another Message
          </Button>
        </div>
      </motion.div>
    )
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
          <label className="text-sm font-medium">Your Name <span className="text-destructive">*</span></label>
          <Input
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
            className={cn(
              "border-gradient-start/30 focus:border-gradient-start",
              errors.name && "border-destructive"
            )}
          />
          {errors.name && <p className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.name.message}
          </p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Your Email <span className="text-destructive">*</span></label>
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
            className={cn(
              "border-gradient-start/30 focus:border-gradient-start",
              errors.email && "border-destructive"
            )}
          />
          {errors.email && <p className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.email.message}
          </p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Subject <span className="text-destructive">*</span></label>
          <Input
            placeholder="Subject"
            {...register("subject", { required: "Subject is required" })}
            className={cn(
              "border-gradient-start/30 focus:border-gradient-start",
              errors.subject && "border-destructive"
            )}
          />
          {errors.subject && <p className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.subject.message}
          </p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Your Message <span className="text-destructive">*</span></label>
          <Textarea
            placeholder="Your Message"
            rows={5}
            {...register("message", { required: "Message is required" })}
            className={cn(
              "border-gradient-start/30 focus:border-gradient-start",
              errors.message && "border-destructive"
            )}
          />
          {errors.message && <p className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.message.message}
          </p>}
        </div>

        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">
            By submitting this form, you'll receive a confirmation email with a copy of your message.
          </p>
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
