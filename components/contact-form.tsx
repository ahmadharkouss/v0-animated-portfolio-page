"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Loader2, CheckCircle, Mail, AlertCircle, MapPin, Phone, Github, Linkedin } from "lucide-react"
import Link from "next/link"

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-card/50 backdrop-blur-sm rounded-xl shadow-lg border border-gradient-start/10 p-4 md:p-8">
      {/* Contact information and map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative p-4 md:p-6 rounded-lg bg-card shadow-md border border-gradient-start/20 flex flex-col h-full"
      >
        {/* Gradient accent in the corner */}
        <div className="absolute top-0 left-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20 rounded-br-full -z-10"></div>

        <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">Contact Information</h3>
        
        <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="bg-gradient-to-r from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20 p-2 rounded-full flex-shrink-0">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-gradient-start" />
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1">Location</h4>
              <p className="text-muted-foreground text-sm">Lyon, France</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 md:gap-4">
            <div className="bg-gradient-to-r from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20 p-2 rounded-full flex-shrink-0">
              <Mail className="h-4 w-4 md:h-5 md:w-5 text-gradient-middle" />
            </div>
            <div className="min-w-0">
              <h4 className="font-medium text-sm mb-1">Email</h4>
              <p className="text-muted-foreground text-sm break-all">requests.ahmad.harkouss@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 md:gap-4">
            <div className="bg-gradient-to-r from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20 p-2 rounded-full flex-shrink-0">
              <Phone className="h-4 w-4 md:h-5 md:w-5 text-gradient-end" />
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1">Phone</h4>
              <p className="text-muted-foreground text-sm">Available upon request</p>
            </div>
          </div>
        </div>
        
        <h4 className="font-medium text-sm mb-2 md:mb-3">Connect with me</h4>
        <div className="flex gap-3 md:gap-4 mb-4 md:mb-6">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="https://www.linkedin.com/in/ahmad-harkouss-843961205/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20 p-2 rounded-full hover:from-gradient-start/30 hover:via-gradient-middle/30 hover:to-gradient-end/30 transition-all inline-flex"
            >
              <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-gradient-middle" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="https://github.com/ahmadharkouss" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20 p-2 rounded-full hover:from-gradient-start/30 hover:via-gradient-middle/30 hover:to-gradient-end/30 transition-all inline-flex"
            >
              <Github className="h-4 w-4 md:h-5 md:w-5 text-gradient-end" />
            </Link>
          </motion.div>
        </div>
        
        {/* Lyon Google Maps Embed */}
        <div className="mt-auto flex-grow">
          <h4 className="font-medium text-sm mb-2 md:mb-3">Find me in Lyon</h4>
          <div className="rounded-lg overflow-hidden w-full h-40 md:h-64 border border-gradient-start/20 shadow-md hover:shadow-lg transition-shadow duration-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89077.19185349513!2d4.7782899!3d45.7578137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon%2C%20France!5e0!3m2!1sen!2sus!4v1693554271915!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lyon, France Map"
            ></iframe>
          </div>
        </div>
      </motion.div>

      {/* Contact form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative p-4 md:p-6 rounded-lg bg-card shadow-md border border-gradient-start/20"
      >
        {/* Gradient accent in the corner */}
        <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20 rounded-bl-full -z-10"></div>

        <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">Send Me a Message</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Name <span className="text-destructive">*</span></label>
            <Input
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className={cn(
                "border-gradient-start/30 focus:border-gradient-start transition-colors",
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
                "border-gradient-start/30 focus:border-gradient-start transition-colors",
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
                "border-gradient-start/30 focus:border-gradient-start transition-colors",
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
                "border-gradient-start/30 focus:border-gradient-start transition-colors",
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

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:opacity-90 text-white shadow-md"
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
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}
