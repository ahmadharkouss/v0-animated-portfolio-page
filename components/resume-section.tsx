"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Code, MapPin, Award, StarIcon } from "lucide-react"
import Image from "next/image"

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
          <motion.div variants={item} className="relative pl-8 border-l pb-8">
            <div className="absolute w-4 h-4 bg-gradient-start rounded-full -left-2 top-0"></div>
            <div className="mb-2 text-sm text-muted-foreground">Feb 2025 - Present</div>
            
            <div className="flex items-start gap-4">
              <motion.div 
                className="relative h-16 w-16 md:h-20 md:w-20 rounded-lg overflow-hidden border border-gradient-start/20 shadow-md flex-shrink-0 bg-white/90 dark:bg-white/10 p-1.5"
                whileHover={{ scale: 1.08, boxShadow: "0 8px 25px rgba(0,0,0,0.1)", borderColor: "rgba(138, 35, 135, 0.4)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  boxShadow: "0 4px 15px rgba(138, 35, 135, 0.15)"
                }}
              >
                <Image 
                  src="/images/volvo_icon.png" 
                  alt="Volvo Logo" 
                  fill 
                  className="object-contain p-1"
                  priority
                />
              </motion.div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">IOT & Edge Computing Engineering Intern</h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="text-gradient-start font-medium">Volvo Group</div>
                  <div className="bg-gradient-start/10 rounded-full px-3 py-0.5 text-xs text-gradient-start">Full Time Internship</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    <span>Lyon, France</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Developed and maintained IOT and Edge Computing systems for Volvo Group with azure cloud services.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="relative pl-8 border-l pb-8">
            <div className="absolute w-4 h-4 bg-gradient-middle rounded-full -left-2 top-0"></div>
            <div className="mb-2 text-sm text-muted-foreground">Sep 2023 - Jan 2024</div>
            
            <div className="flex items-start gap-4">
              <motion.div 
                className="relative h-16 w-16 md:h-20 md:w-20 rounded-lg overflow-hidden border border-gradient-middle/20 shadow-md flex-shrink-0 bg-white/90 dark:bg-white/10 p-1.5"
                whileHover={{ scale: 1.08, boxShadow: "0 8px 25px rgba(0,0,0,0.1)", borderColor: "rgba(234, 85, 142, 0.4)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  boxShadow: "0 4px 15px rgba(234, 85, 142, 0.15)"
                }}
              >
                <Image 
                  src="/images/abgi_icon.png" 
                  alt="ABGi Logo" 
                  fill 
                  className="object-contain p-1"
                  priority
                />
              </motion.div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">Full Stack Developer</h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="text-gradient-middle font-medium">ABGi France</div>
                  <div className="bg-gradient-middle/10 rounded-full px-3 py-0.5 text-xs text-gradient-middle">Full Time Internship</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    <span>Paris, France</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                Designed and implemented a comprehensive draft solution for ABGi from scratch, enabling clients to access financial aids from the French government, such as "Crédit Impôt Recherche (CIR)" and "Crédit Impôt Innovation.(CII)"<br></br>
                - Utilized Java-Quarkus for the backend with a layered architecture, and TypeScript-Angular along with Angular Materials for the frontend. <br></br>
                - Successfully deployed the system on Azure Cloud. <br></br>
                </p>
              </div>
            </div>
          </motion.div>

          {/*
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
          */}

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
            <div className="mb-2 text-sm text-muted-foreground">2020 - 2025</div>
            
            <div className="flex items-start gap-4">
              <motion.div 
                className="relative h-16 w-16 md:h-20 md:w-20 rounded-lg overflow-hidden border border-gradient-start/20 shadow-md flex-shrink-0 bg-white/90 dark:bg-white/10 p-1.5"
                whileHover={{ scale: 1.08, boxShadow: "0 8px 25px rgba(0,0,0,0.1)", borderColor: "rgba(138, 35, 135, 0.4)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  boxShadow: "0 4px 15px rgba(138, 35, 135, 0.15)"
                }}
              >
                <Image 
                  src="/images/epita_icon.png" 
                  alt="EPITA Logo" 
                  fill 
                  className="object-contain p-1"
                  priority
                />
              </motion.div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">Master of Computer Engineering In Industry 5.0, Computer Science</h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="text-gradient-start font-medium">EPITA: Ecole d'Ingénieurs en Informatique</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    <span>Lyon, France</span>
                  </div>
                  <div className="bg-gradient-start/10 rounded-full px-3 py-0.5 text-xs text-gradient-start">GPA: 3.7/4.0</div>
                </div>
                <div className="text-muted-foreground">
                  <div className="mb-4 p-3 rounded-lg bg-gradient-start/5 border border-gradient-start/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gradient-start/20 p-1.5 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-gradient-start"
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <path d="M3.29 7 12 12l8.71-5"></path>
                          <line x1="12" y1="22" x2="12" y2="12"></line>
                        </svg>
                      </div>
                      <p className="font-medium text-gradient-start">Industrial Engineering</p>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 pl-5 list-disc">
                      <li>Lean Management</li>
                      <li>Supply Chain Management</li>
                      <li>IOT objects conception</li>
                      <li>Advanced Digital Manufacturing</li>
                      <li>Modeling and simulation of industrial digital twin systems</li>
                      <li>Service-oriented architecture and microservices</li>
                      <li>ERP information systems</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4 p-3 rounded-lg bg-gradient-middle/5 border border-gradient-middle/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gradient-middle/20 p-1.5 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-gradient-middle"
                        >
                          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
                          <path d="m8 16 4-4 4 4"></path>
                          <line x1="16" y1="16" x2="16" y2="20"></line>
                        </svg>
                      </div>
                      <p className="font-medium text-gradient-middle">Cloud, Network and cybersecurity</p>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 pl-5 list-disc">
                      <li>Cybersecurity of Industrial Systems</li>
                      <li>Pen Testing</li>
                      <li>Industrial local networks</li>
                      <li>System and network administration</li>
                      <li>DevSecOps</li>
                      <li>Cloud security</li>
                      <li>IaaS, infrastructure as a service (Azure, AWS)</li>
                      <li>Crypto and BlockChain</li>
                      <li>Information Systems Security / Database Administration</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4 p-3 rounded-lg bg-gradient-end/5 border border-gradient-end/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gradient-end/20 p-1.5 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-gradient-end"
                        >
                          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                          <polyline points="2 17 12 22 22 17"></polyline>
                          <polyline points="2 12 12 17 22 12"></polyline>
                        </svg>
                      </div>
                      <p className="font-medium text-gradient-end">Data Science</p>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 pl-5 list-disc">
                      <li>Simultaneous Localization and Mapping (NVIDIA Isaac ROS)</li>
                      <li>Deep Learning</li>
                      <li>MLOps</li>
                      <li>Machine Learning</li>
                      <li>Big Data Analytics with spark and scala</li>
                      <li>DataViz</li>
                      <li>Combinatorial Problem Solving</li>
                      <li>Distributed Algorithms</li>
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
          </motion.div>


          <motion.div variants={item} className="relative pl-8 border-l pb-6">
            <div className="absolute w-4 h-4 bg-gradient-middle rounded-full -left-2 top-0"></div>
            <div className="mb-2 text-sm text-muted-foreground">Jan 2022 - Jun 2022</div>
            
            <div className="flex items-start gap-4">
              <motion.div 
                className="relative h-16 w-16 md:h-20 md:w-20 rounded-lg overflow-hidden border border-gradient-middle/20 shadow-md flex-shrink-0 bg-white/90 dark:bg-white/10 p-1.5"
                whileHover={{ scale: 1.08, boxShadow: "0 8px 25px rgba(0,0,0,0.1)", borderColor: "rgba(234, 85, 142, 0.4)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  boxShadow: "0 4px 15px rgba(234, 85, 142, 0.15)"
                }}
              >
                <Image 
                  src="/images/univ_dubai_icon.png" 
                  alt="University of Dubai Logo" 
                  fill 
                  className="object-contain p-1"
                  priority
                />
              </motion.div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">Academic Exchange Program</h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="text-gradient-middle font-medium">University of Dubai</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    <span>Dubai, UAE</span>
                  </div>
                  <div className="bg-gradient-middle/10 rounded-full px-3 py-0.5 text-xs text-gradient-middle">GPA: 4.0/4.0</div>
                </div>
                <div className="text-muted-foreground">
                  <p className="mb-2 font-medium">Key Courses:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 pl-5 list-disc mb-3">
                    <li>Information System Security </li>
                    <li>Introduction to Operating Systems</li>
                    <li>Principle of networking</li>
                    <li>Object Oriented Programming</li>
                  </ul>
                </div>
                <div className="flex items-center gap-1 text-xs bg-gradient-middle/5 px-2 py-1 rounded-md inline-block">
                  <Award className="h-3 w-3 text-gradient-middle" />
                  <span>Highest GPA in the class</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </TabsContent>

      <TabsContent value="skills">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="mb-6 p-3 rounded-lg bg-gradient-start/5 border border-gradient-start/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-start/20 p-1.5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-gradient-start"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <p className="font-medium text-gradient-start">Industrial & IoT Technologies</p>
            </div>
            <motion.div
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div variants={item} className="space-y-4">
                <h4 className="text-sm font-medium border-b border-gradient-start/10 pb-1 mb-2">Industrial Systems</h4>
                <AnimatedSkills
                  skills={[
                    { name: "Industrial Protocols: OPCUA, MQTT, Modbus, Siemens S7", percentage: 75 },
                    { name: "Edge Computing Applications (Aggregating data from Kepware server)", percentage: 86 },
                    { name: "Distributed Systems", percentage: 85 },
                    { name: "Penetration Testing for Industrial Systems", percentage: 70 },
                  ]}
                />
              </motion.div>
              <motion.div variants={item} className="space-y-4">
                <h4 className="text-sm font-medium border-b border-gradient-start/10 pb-1 mb-2">IoT & Cloud</h4>
                <AnimatedSkills
                  skills={[
                    { name: "Embedded Systems", percentage: 65 },
                    { name: "Cloud Integration for IoT: Azure IoT Operations", percentage: 95 },
                    { name: "On-premises and hybrid cloud solutions", percentage: 87 },
                    { name: "IoT Security", percentage: 78 },
                  ]}
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="mb-6 p-3 rounded-lg bg-gradient-middle/5 border border-gradient-middle/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-middle/20 p-1.5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-gradient-middle"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="6" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <p className="font-medium text-gradient-middle">Programming Languages</p>
            </div>
            <motion.div
              variants={container}
              className="grid grid-cols-1 gap-4"
            >
              <AnimatedSkills
                skills={[
                  { name: "Python", percentage: 90 },
                  { name: "Java", percentage: 82 },
                  { name: "JavaScript/TypeScript", percentage: 88 },
                  { name: "C/C++", percentage: 65 },
                  { name: "SQL", percentage: 78 },
                ]}
              />
            </motion.div>
          </div>

          <div className="mb-6 p-3 rounded-lg bg-gradient-end/5 border border-gradient-end/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-end/20 p-1.5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-gradient-end"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <p className="font-medium text-gradient-end">Frameworks & DevOps</p>
            </div>
            <motion.div
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div variants={item} className="space-y-4">
                <h4 className="text-sm font-medium border-b border-gradient-end/10 pb-1 mb-2">Backend Frameworks</h4>
                <AnimatedSkills
                  skills={[
                    { name: "Quarkus", percentage: 85 },
                    { name: "Node.js / Express", percentage: 80 },
                    { name: "Spring Boot", percentage: 75 },
                    { name: "Sequelize ORM", percentage: 70 },
                  ]}
                />
              </motion.div>
              <motion.div variants={item} className="space-y-4">
                <h4 className="text-sm font-medium border-b border-gradient-end/10 pb-1 mb-2">Frontend & DevOps</h4>
                <AnimatedSkills
                  skills={[
                    { name: "Angular", percentage: 82 },
                    { name: "React", percentage: 78 },
                    { name: "Docker / Kubernetes", percentage: 80 },
                    { name: "CI/CD", percentage: 90 },
                    { name: "IaC: Terraform, Bicep, Packer, Ansible", percentage: 70 },
                  ]}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </TabsContent>
    </Tabs>
  )
}



/*

    <li>Advanced IoT Architecture</li>
                    <li>Embedded Systems Programming</li>
                    <li>Cloud Computing for IoT</li>
                    <li>Computer Networks & Protocols</li>
                    <li>Distributed Systems Design</li>
                    <li>Industry 5.0 Technologies</li>
                    <li>AI for Edge Computing</li>
                    <li>Real-time Operating Systems</li>


*/