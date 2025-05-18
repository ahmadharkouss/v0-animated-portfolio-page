"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CalendarIcon, Clock, Loader2, CheckCircle, Video, AlertCircle, Copy, Check, Link, Key } from "lucide-react"
import { format } from "date-fns"
import { useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

type FormData = {
  name: string
  email: string
  topic: string
}

export function ScheduleCall() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>()
  const [duration, setDuration] = useState<string>("30") // Default to 30 minutes
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [calendarLink, setCalendarLink] = useState<string | null>(null)
  const [zoomLink, setZoomLink] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)
  const [zoomMeetingPassword, setZoomMeetingPassword] = useState<string | null>(null)
  
  // New states for availability
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([])
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false)
  const [noAvailableTimes, setNoAvailableTimes] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormData>({
    mode: "onBlur" // Validate on blur to provide immediate feedback
  })

  const defaultTimeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"]

  // Check availability when date changes
  useEffect(() => {
    if (date) {
      checkAvailability(date);
    }
  }, [date, duration]); // Also recheck availability when duration changes
  
  // Function to check availability for a selected date
  const checkAvailability = async (selectedDate: Date) => {
    setIsCheckingAvailability(true);
    setTime(undefined); // Reset time selection when date or duration changes
    setNoAvailableTimes(false);
    
    try {
      const response = await fetch('/api/available-times', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: selectedDate.toISOString(),
          duration, // Pass duration to the API
        }),
      });
      
      const result = await response.json();
      
      if (response.ok && result.availableTimes) {
        setAvailableTimeSlots(result.availableTimes);
        setNoAvailableTimes(result.availableTimes.length === 0);
      } else {
        // If API fails, show all time slots
        setAvailableTimeSlots(defaultTimeSlots);
        console.error('Error checking availability:', result.error);
      }
    } catch (error) {
      console.error('Error checking availability:', error);
      setAvailableTimeSlots(defaultTimeSlots);
    } finally {
      setIsCheckingAvailability(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!date || !time) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description: "Please select both a date and time for your call.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          date: date.toISOString(),
          time,
          duration, // Add duration
          topic: data.topic,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 409) { // Conflict - time slot not available
          toast({
            variant: "destructive",
            title: "Time slot not available",
            description: "This time slot is no longer available. Please choose another time.",
          });
          
          // Refresh available times
          if (date) {
            checkAvailability(date);
          }
          throw new Error('Time slot not available');
        } else {
          throw new Error(result.error || 'Failed to schedule call');
        }
      }

      // Save links and password if available
      if (result.calendarLink) {
        setCalendarLink(result.calendarLink);
      }
      
      if (result.zoomLink) {
        setZoomLink(result.zoomLink);
      }
      
      if (result.zoomPassword) {
        setZoomMeetingPassword(result.zoomPassword);
      }

      toast({
        title: "Call scheduled!",
        description: `Your ${formatDuration(duration)} meeting is scheduled for ${format(date, "PPP")} at ${time} (Lyon, France time).`,
      })

      // Reset form fields but keep the confirmation state
      reset()
      setDate(undefined)
      setTime(undefined)
      setDuration("30") // Reset duration too
    } catch (error: any) {
      if (error.message !== 'Time slot not available') {
        console.error('Error scheduling call:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message || "Failed to schedule call. Please try again later.",
        });
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setZoomLink(null);
    setCalendarLink(null);
    reset();
    setDate(undefined);
    setTime(undefined);
    setDuration("30"); // Reset duration too
  };

  const formatDuration = (mins: string) => {
    if (mins === "60") return "1 hour";
    return `${mins} minutes`;
  };

  const copyMeetingDetails = () => {
    if (!zoomLink) return;
    
    // Prepare meeting details for copying
    const meetingDate = date ? format(date, "PPP") : "";
    const meetingDetails = `
Meeting with Ahmad Harkous
Date: ${meetingDate}
Time: ${time} (Lyon, France - CET/CEST timezone)
Duration: ${formatDuration(duration)}
Zoom Meeting Link: ${zoomLink}
${zoomMeetingPassword ? `Meeting Password: ${zoomMeetingPassword}` : ''}
    `.trim();
    
    // Copy to clipboard
    navigator.clipboard.writeText(meetingDetails).then(
      () => {
        setCopied(true);
        toast({
          title: "Copied!",
          description: "Meeting details copied to clipboard",
        });
        
        // Reset the copied state after 2 seconds
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.error('Could not copy text: ', err);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to copy meeting details",
        });
      }
    );
  };

  const copyZoomLink = () => {
    if (!zoomLink) return;
    
    navigator.clipboard.writeText(zoomLink).then(
      () => {
        setCopiedLink(true);
        toast({
          title: "Copied!",
          description: "Zoom meeting link copied to clipboard",
        });
        
        setTimeout(() => {
          setCopiedLink(false);
        }, 2000);
      },
      (err) => {
        console.error('Could not copy link: ', err);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to copy meeting link",
        });
      }
    );
  };

  const copyZoomCode = () => {
    if (!zoomMeetingPassword) return;
    
    navigator.clipboard.writeText(zoomMeetingPassword).then(
      () => {
        setCopiedCode(true);
        toast({
          title: "Copied!",
          description: "Zoom meeting code copied to clipboard",
        });
        
        setTimeout(() => {
          setCopiedCode(false);
        }, 2000);
      },
      (err) => {
        console.error('Could not copy code: ', err);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to copy meeting code",
        });
      }
    );
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-card border border-gradient-start/20 rounded-lg p-6 shadow-sm relative">
        {/* Gradient accent in the corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gradient-start/20 via-gradient-middle/20 to-gradient-end/20 rounded-bl-full -z-10"></div>

        {zoomLink ? (
          <div className="text-center py-6">
            <div className="flex flex-col items-center justify-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#2D8CFF] rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mt-4">Call Successfully Scheduled!</h3>
              <p className="text-muted-foreground max-w-md">
                Your {formatDuration(duration)} meeting has been added to the calendar for {date ? format(date, "PPP") : ""} at {time} <span className="text-gradient-start">(Lyon, France timezone)</span>. You'll receive a confirmation email with details.
              </p>

              <div className="w-full mt-8 p-6 bg-gradient-start/5 rounded-lg border border-gradient-start/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Video className="h-5 w-5 text-[#2D8CFF]" />
                  <h4 className="font-medium">Zoom Meeting Details</h4>
                </div>
                
                {/* Join Zoom Button */}
                <a 
                  href={zoomLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#2D8CFF] hover:opacity-90 text-white py-3 px-6 rounded-md w-full text-center"
                >
                  Join Zoom Meeting
                </a>
                
                {/* Copy Buttons Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  <Button 
                    onClick={copyZoomLink}
                    variant="outline" 
                    className="inline-flex items-center justify-center space-x-2"
                    disabled={copiedLink}
                  >
                    {copiedLink ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Link className="h-4 w-4" />
                        <span>Copy Meeting Link</span>
                      </>
                    )}
                  </Button>
                  
                  {zoomMeetingPassword && (
                    <Button 
                      onClick={copyZoomCode}
                      variant="outline" 
                      className="inline-flex items-center justify-center space-x-2"
                      disabled={copiedCode}
                    >
                      {copiedCode ? (
                        <>
                          <Check className="h-4 w-4" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Key className="h-4 w-4" />
                          <span>Copy Meeting Code</span>
                        </>
                      )}
                    </Button>
                  )}
                </div>
                
                {/* Copy All Button */}
                <Button 
                  onClick={copyMeetingDetails}
                  variant="outline" 
                  className="mt-4 w-full inline-flex items-center justify-center space-x-2"
                  disabled={copied}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Copied All Details!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy All Meeting Details</span>
                    </>
                  )}
                </Button>
              </div>
              
              <Button 
                onClick={resetForm} 
                variant="outline" 
                className="mt-6"
              >
                Schedule Another Call
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Date <span className="text-destructive">*</span></label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal border-gradient-start/30",
                        !date && "text-muted-foreground",
                        errors.name && !date && "border-destructive",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() === 0 || date.getDay() === 6
                      }
                    />
                  </PopoverContent>
                </Popover>
                {errors.name && !date && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> Date is required
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Select Time <span className="text-destructive">*</span> <span className="text-xs font-normal text-muted-foreground">(Lyon, FR - CET/CEST Timezone)</span>
                  {isCheckingAvailability && <span className="ml-2 text-xs text-muted-foreground">(Checking availability...)</span>}
                </label>
                <Select 
                  onValueChange={setTime} 
                  disabled={isCheckingAvailability || !date || noAvailableTimes}
                >
                  <SelectTrigger className={cn(
                    "w-full border-gradient-start/30",
                    errors.name && !time && "border-destructive",
                  )}>
                    <SelectValue placeholder={
                      isCheckingAvailability 
                        ? "Checking availability..." 
                        : noAvailableTimes
                          ? "No available times" 
                          : !date
                            ? "Select a date first"
                            : "Select a time slot"
                    }>
                      {time ? (
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {time}
                        </div>
                      ) : (
                        isCheckingAvailability 
                          ? "Checking availability..." 
                          : noAvailableTimes
                            ? "No available times"
                            : !date
                              ? "Select a date first"
                              : "Select a time slot"
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimeSlots.length > 0 ? (
                      availableTimeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="p-2 text-center text-muted-foreground">
                        {noAvailableTimes ? "No available times on this date" : "Select a date to see available times"}
                      </div>
                    )}
                  </SelectContent>
                </Select>
                {errors.name && !time && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> Time is required
                  </p>
                )}
                {noAvailableTimes && date && (
                  <p className="text-xs text-amber-500 mt-1">
                    No available times on this date. Please select another date.
                  </p>
                )}
                
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Meeting Duration <span className="text-destructive">*</span></label>
              <Select 
                value={duration}
                onValueChange={setDuration} 
              >
                <SelectTrigger className="w-full border-gradient-start/30">
                  <SelectValue placeholder="Select meeting duration">
                    {formatDuration(duration)}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your Name <span className="text-destructive">*</span></label>
              <Input
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
                className={cn(
                  "border-gradient-start/30 focus:border-gradient-start",
                  errors.name && "border-destructive"
                )}
              />
              {errors.name && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your Email <span className="text-destructive">*</span></label>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                  validate: {
                    validFormat: (value) => {
                      // Additional validation to ensure email has correct format
                      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) || 
                        "Invalid email format. Please check your email address";
                    }
                  }
                })}
                className={cn(
                  "border-gradient-start/30 focus:border-gradient-start",
                  errors.email && "border-destructive"
                )}
              />
              {errors.email && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">What would you like to discuss? <span className="text-destructive">*</span></label>
              <Textarea
                placeholder="Brief description of what you'd like to discuss"
                {...register("topic", { required: "Topic is required" })}
                rows={3}
                className={cn(
                  "border-gradient-start/30 focus:border-gradient-start",
                  errors.topic && "border-destructive"
                )}
              />
              {errors.topic && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.topic.message}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">
                By scheduling a call, you'll receive a confirmation email with a Zoom meeting link and code.
                <br/>The call will be {formatDuration(duration)} in duration.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:opacity-90 text-white"
              disabled={isSubmitting || isCheckingAvailability || !date || !time || noAvailableTimes}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scheduling...
                </>
              ) : (
                "Schedule Call"
              )}
            </Button>
          </form>
        )}
      </div>
    </motion.div>
  )
}
