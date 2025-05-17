"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Code } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

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
        <TabsTrigger value="experience" className="flex items-center gap-2">
          <Briefcase className="h-4 w-4" />
          <span className="hidden sm:inline">Experience</span>
        </TabsTrigger>
        <TabsTrigger value="education" className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4" />
          <span className="hidden sm:inline">Education</span>
        </TabsTrigger>
        <TabsTrigger value="skills" className="flex items-center gap-2">
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
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">2021 - Present</div>
            <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
            <div className="text-primary font-medium mb-2">Tech Company Inc.</div>
            <p className="text-muted-foreground">
              Led the development of the company's flagship product, improving performance by 40%. Mentored junior
              developers and implemented best practices for code quality.
            </p>
          </motion.div>

          <motion.div variants={item} className="relative pl-8 border-l pb-6">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">2018 - 2021</div>
            <h3 className="text-xl font-bold">Frontend Developer</h3>
            <div className="text-primary font-medium mb-2">Digital Agency Ltd.</div>
            <p className="text-muted-foreground">
              Developed responsive web applications for various clients using React and Vue.js. Collaborated with
              designers to implement pixel-perfect UI components.
            </p>
          </motion.div>

          <motion.div variants={item} className="relative pl-8 border-l">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">2016 - 2018</div>
            <h3 className="text-xl font-bold">Junior Web Developer</h3>
            <div className="text-primary font-medium mb-2">Startup Hub</div>
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
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">2012 - 2016</div>
            <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
            <div className="text-primary font-medium mb-2">University of Technology</div>
            <p className="text-muted-foreground">
              Graduated with honors. Specialized in web development and software engineering. Completed a thesis on
              optimizing web application performance.
            </p>
          </motion.div>

          <motion.div variants={item} className="relative pl-8 border-l">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">2020</div>
            <h3 className="text-xl font-bold">Advanced React Certification</h3>
            <div className="text-primary font-medium mb-2">Frontend Masters</div>
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
          <div className="space-y-6">
            <motion.div variants={item} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">React / Next.js</span>
                <span>95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </motion.div>

            <motion.div variants={item} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">JavaScript / TypeScript</span>
                <span>90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </motion.div>

            <motion.div variants={item} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">HTML / CSS</span>
                <span>95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </motion.div>

            <motion.div variants={item} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Tailwind CSS</span>
                <span>90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div variants={item} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Node.js</span>
                <span>80%</span>
              </div>
              <Progress value={80} className="h-2" />
            </motion.div>

            <motion.div variants={item} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">UI/UX Design</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </motion.div>

            <motion.div variants={item} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">GraphQL</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </motion.div>

            <motion.div variants={item} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Git / GitHub</span>
                <span>90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </motion.div>
          </div>
        </motion.div>
      </TabsContent>
    </Tabs>
  )
}
