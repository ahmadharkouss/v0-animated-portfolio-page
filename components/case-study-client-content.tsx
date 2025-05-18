"use client"

import React, { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Clock, Building, Lightbulb, CheckCircle, AlertTriangle, BarChart, FileText, Download } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTransition } from "@/components/page-transition"
import { useScrollTop } from "@/hooks/use-scroll-top"
import { Button } from "@/components/ui/button"

// Define the types for the case study data
type Chart = {
  title: string;
  description: string;
  image: string;
};

type PDFReport = {
  url: string;
  language: string;
  description: string;
};

type CaseStudy = {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  industry: string;
  duration: string;
  client: string;
  technologies: string[];
  challenge: string;
  solution: string;
  implementation: string[];
  results: string[];
  challenges: string[];
  charts: Chart[];
  pdfReport?: PDFReport;
};

interface CaseStudyClientContentProps {
  caseStudy: CaseStudy;
}

export function CaseStudyClientContent({ caseStudy }: CaseStudyClientContentProps) {
  // Scroll to top when the component loads
  useScrollTop();
  
  return (
    <PageTransition>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Badge className="mb-4">{caseStudy.industry}</Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{caseStudy.title}</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{caseStudy.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building className="h-4 w-4" />
            <span>{caseStudy.client}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative h-[300px] md:h-[400px] mb-8 overflow-hidden rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Image src={caseStudy.image || "/placeholder.svg"} alt={caseStudy.title} fill className="object-cover" />
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-lg text-muted-foreground mb-4">{caseStudy.fullDescription}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {caseStudy.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="challenge" className="mb-12">
        <TabsList className={`grid ${caseStudy.pdfReport ? 'grid-cols-4' : 'grid-cols-3'} mb-8`}>
          <TabsTrigger value="challenge" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Challenge</span>
          </TabsTrigger>
          <TabsTrigger value="solution" className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4" />
            <span>Solution</span>
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            <span>Results</span>
          </TabsTrigger>
          {caseStudy.pdfReport && (
            <TabsTrigger value="report" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Report</span>
            </TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="challenge">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
              <p className="text-muted-foreground mb-6">{caseStudy.challenge}</p>

              <h4 className="font-semibold mb-2">Key Challenges Faced:</h4>
              <ul className="space-y-2">
                {caseStudy.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="solution">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
              <p className="text-muted-foreground mb-6">{caseStudy.solution}</p>

              <h4 className="font-semibold mb-2">Implementation Process:</h4>
              <ul className="space-y-2">
                {caseStudy.implementation.map((step, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{step}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="results">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Results & Impact</h3>
              <ul className="space-y-2 mb-8">
                {caseStudy.results.map((result, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{result}</span>
                  </motion.li>
                ))}
              </ul>

              {caseStudy.charts && caseStudy.charts.length > 0 && (
                <>
                  <h4 className="font-semibold mb-4">Data Visualization:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {caseStudy.charts.map((chart, index) => (
                      <motion.div
                        key={index}
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div className="relative h-[200px] rounded-md overflow-hidden">
                          <Image
                            src={chart.image || "/placeholder.svg"}
                            alt={chart.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h5 className="font-medium">{chart.title}</h5>
                        <p className="text-sm text-muted-foreground">{chart.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {caseStudy.pdfReport && (
          <TabsContent value="report">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Research Report</h3>
                <p className="text-muted-foreground mb-6">{caseStudy.pdfReport.description}</p>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="font-medium mb-2">Report Details:</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Language:</span> {caseStudy.pdfReport.language}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Format:</span> PDF
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <Button asChild className="w-full md:w-auto bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:opacity-90 text-white">
                    <a href={caseStudy.pdfReport.url} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" /> View Full Report
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full md:w-auto">
                    <a href={caseStudy.pdfReport.url} download>
                      <Download className="mr-2 h-4 w-4" /> Download Report
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </PageTransition>
  )
} 