"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Code } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSkills } from "@/components/animated-skills"

export function ResumeSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Tabs defaultValue="experience" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger
          value="experience"
          className="flex items-center gap-2 data-[state=active]:bg-gradient-start/10 data-[state=active]:text-gradient-start"
        >
          <Briefcase className="h-4 w-4" />
          <span className="hidden sm:inline">Experience</span>
        </TabsTrigger>
        <TabsTrigger
          value="education"
          className="flex items-center gap-2 data-[state=active]:bg-gradient-middle/10 data-[state=active]:text-gradient-middle"
        >
          <GraduationCap className="h-4 w-4" />
          <span className="hidden sm:inline">Education</span>
        </TabsTrigger>
        <TabsTrigger
          value="skills"
          className="flex items-center gap-2 data-[state=active]:bg-gradient-end/10 data-[state=active]:text-gradient-end"
        >
          <Code className="h-4 w-4" />
          <span className="hidden sm:inline">Skills</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="experience">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={item} className="relative pl-8 border-l pb-6">
            <div className="absolute w-4 h-4 bg-gradient-start rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">2021 - Present</div>
            <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
            <div className="text-gradient-start font-medium mb-2">Tech Company Inc.</div>
            <p className="text-muted-foreground">
              Led the development of the company's flagship product, improving performance by 40%. Mentored junior
              developers and implemented best practices for code quality.
            </p>
          </motion.div>

          <motion.div variants={item} className="relative pl-8 border-l pb-6">
            <div className="absolute w-4 h-4 bg-gradient-middle rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">2018 - 2021</div>
            <h3 className="text-xl font-bold">Frontend Developer</h3>
            <div className="text-gradient-middle font-medium mb-2">Digital Agency Ltd.</div>
            <p className="text-muted-foreground">
              Developed responsive web applications for various clients using React and Vue.js. Collaborated with
              designers to implement pixel-perfect UI components.
            </p>
          </motion.div>

          <motion.div variants={item} className="relative pl-8 border-l">
            <div className="absolute w-4 h-4 bg-gradient-end rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">2016 - 2018</div>
            <h3 className="text-xl font-bold">Junior Web Developer</h3>
            <div className="text-gradient-end font-medium mb-2">Startup Hub</div>
            <p className="text-muted-foreground">
              Built and maintained websites for small businesses using HTML, CSS, and JavaScript. Assisted in the
              development of a CMS platform used by over 50 clients.
            </p>
          </motion.div>
        </motion.div>
      </TabsContent>

      <TabsContent value="education">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={item} className="relative pl-8 border-l pb-6">
            <div className="absolute w-4 h-4 bg-gradient-start rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">2012 - 2016</div>
            <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
            <div className="text-gradient-start font-medium mb-2">University of Technology</div>
            <p className="text-muted-foreground">
              Graduated with honors. Specialized in web development and software engineering. Completed a thesis on
              optimizing web application performance.
            </p>
          </motion.div>

          <motion.div variants={item} className="relative pl-8 border-l">
            <div className="absolute w-4 h-4 bg-gradient-end rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">2020</div>
            <h3 className="text-xl font-bold">Advanced React Certification</h3>
            <div className="text-gradient-end font-medium mb-2">Frontend Masters</div>
            <p className="text-muted-foreground">
              Completed an intensive course on advanced React patterns, state management, and performance optimization
              techniques.
            </p>
          </motion.div>
        </motion.div>
      </TabsContent>

      <TabsContent value="skills">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatedSkills
            skills={[
              { name: "IoT Protocols", percentage: 95 },
              { name: "Embedded Systems", percentage: 90 },
              { name: "Edge Computing", percentage: 95 },
              { name: "Hardware Design", percentage: 85 },
            ]}
          />
          <AnimatedSkills
            skills={[
              { name: "Python", percentage: 90 },
              { name: "C/C++", percentage: 85 },
              { name: "Cloud Integration", percentage: 80 },
              { name: "MQTT/CoAP", percentage: 90 },
            ]}
          />
        </motion.div>
      </TabsContent>
    </Tabs>
  )
}
