import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Clock, Building, Lightbulb, CheckCircle, AlertTriangle, BarChart, ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { CaseStudyClientContent } from "@/components/case-study-client-content"

// This would typically come from a database or API
const caseStudies = {

  /* 
  "smart-city-monitoring": {
    title: "Smart City Environmental Monitoring System",
    description:
      "Implementation of a city-wide environmental monitoring system with real-time air quality, noise, and traffic data collection.",
    fullDescription:
      "The Smart City Environmental Monitoring System was designed to provide city officials and residents with real-time data on environmental conditions throughout the metropolitan area. The system collects data on air quality, noise levels, traffic density, and weather conditions, enabling better urban planning and public health initiatives.",
    image: "/placeholder.svg?height=500&width=1000",
    industry: "Smart City",
    duration: "8 months",
    client: "Metropolitan City Council",
    technologies: ["LoRaWAN", "Sensors", "Cloud Platform", "Data Analytics", "Solar Power", "Dashboard"],
    challenge:
      "The city needed a comprehensive environmental monitoring system that could cover a large urban area while maintaining low power consumption and minimizing maintenance requirements. The system needed to operate reliably in various weather conditions and provide accurate, real-time data to multiple stakeholders.",
    solution:
      "We designed a network of solar-powered sensor nodes deployed at strategic locations throughout the city. Each node contained multiple environmental sensors and communicated via LoRaWAN to central gateways. The data was processed, analyzed, and visualized through a cloud-based platform accessible to city officials and the public.",
    implementation: [
      "Conducted a thorough site survey to identify optimal sensor placement locations",
      "Designed custom weatherproof enclosures for the sensor nodes with solar panels",
      "Developed firmware for the sensor nodes with power optimization techniques",
      "Implemented a LoRaWAN network with redundant gateways for reliable coverage",
      "Created a cloud-based data platform with real-time processing capabilities",
      "Developed web and mobile dashboards for data visualization and alerts",
      "Integrated with the city's existing systems for comprehensive data analysis",
    ],
    results: [
      "30% reduction in response time to environmental incidents",
      "Identified 5 previously unknown pollution hotspots in the city",
      "Enabled data-driven decisions for traffic management, reducing congestion by 15%",
      "Provided residents with real-time air quality information, increasing public awareness",
      "Created a platform for future smart city initiatives and expansions",
    ],
    challenges: [
      "Ensuring reliable solar power during winter months with limited sunlight",
      "Maintaining wireless connectivity in dense urban environments with signal interference",
      "Developing algorithms to filter out anomalous sensor readings and ensure data quality",
      "Coordinating with multiple city departments for installation permissions and access",
    ],
    charts: [
      {
        title: "Air Quality Improvement",
        description: "Average air quality index before and after system implementation",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "System Uptime",
        description: "Network reliability statistics over the project duration",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  "industrial-predictive-maintenance": {
    title: "Industrial Predictive Maintenance Solution",
    description:
      "Development of a predictive maintenance system for manufacturing equipment using vibration analysis and machine learning.",
    fullDescription:
      "The Industrial Predictive Maintenance Solution was developed for a large manufacturing facility to prevent unexpected equipment failures and optimize maintenance schedules. By analyzing vibration patterns and other sensor data, the system could predict potential failures before they occurred, significantly reducing downtime and maintenance costs.",
    image: "/placeholder.svg?height=500&width=1000",
    industry: "Manufacturing",
    duration: "6 months",
    client: "Global Manufacturing Corporation",
    technologies: ["Edge Computing", "ML", "Vibration Sensors", "MQTT", "Time Series DB", "Thermal Imaging"],
    challenge:
      "The manufacturing facility was experiencing frequent unexpected equipment failures, resulting in costly downtime and production delays. Traditional scheduled maintenance was inefficient, often performed too early (wasting resources) or too late (after damage occurred). They needed a system that could accurately predict when maintenance was actually needed.",
    solution:
      "We implemented a comprehensive predictive maintenance system using vibration sensors, thermal cameras, and other IoT devices connected to edge computing nodes. Machine learning algorithms analyzed the sensor data to detect anomalies and predict potential failures. The system integrated with the facility's existing maintenance management software to automatically schedule maintenance activities.",
    implementation: [
      "Installed vibration sensors and thermal cameras on critical equipment",
      "Deployed edge computing devices for local data processing and analysis",
      "Developed machine learning models trained on historical failure data",
      "Created an MQTT-based communication infrastructure for reliable data transmission",
      "Implemented a time-series database for efficient storage and retrieval of sensor data",
      "Developed a dashboard for maintenance teams with alerts and recommendations",
      "Integrated with the existing CMMS (Computerized Maintenance Management System)",
    ],
    results: [
      "85% reduction in unexpected equipment failures",
      "23% decrease in overall maintenance costs",
      "18% increase in equipment lifespan",
      "37% reduction in maintenance-related downtime",
      "ROI achieved within 8 months of implementation",
    ],
    challenges: [
      "Developing accurate machine learning models with limited historical failure data",
      "Ensuring reliable sensor operation in harsh industrial environments",
      "Minimizing false positives while maintaining high detection sensitivity",
      "Training maintenance staff on the new system and procedures",
    ],
    charts: [
      {
        title: "Maintenance Cost Reduction",
        description: "Comparison of maintenance costs before and after implementation",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "Failure Prediction Accuracy",
        description: "Model accuracy improvements over time",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  "precision-agriculture": {
    title: "Precision Agriculture Monitoring System",
    description:
      "Design and implementation of a comprehensive agricultural monitoring system for optimizing crop yield and resource usage.",
    fullDescription:
      "The Precision Agriculture Monitoring System was developed for a large-scale farming operation to optimize irrigation, fertilization, and pest control through data-driven decision making. The system monitors soil conditions, weather patterns, and crop health to provide actionable insights for farm management.",
    image: "/placeholder.svg?height=500&width=1000",
    industry: "Agriculture",
    duration: "12 months",
    client: "Regional Agricultural Cooperative",
    technologies: ["Soil Sensors", "Weather Station", "Solar Power", "LoRa", "Drone Imaging", "Irrigation Control"],
    challenge:
      "The agricultural cooperative was facing challenges with water management, inconsistent crop yields, and rising operational costs. Traditional farming methods were not efficient enough to remain competitive in the market. They needed a solution that could help optimize resource usage while improving crop yields across diverse growing conditions.",
    solution:
      "We designed a comprehensive monitoring system with a network of solar-powered soil sensors, weather stations, and periodic drone imaging. The system collected data on soil moisture, temperature, nutrient levels, and weather conditions. This data was analyzed to provide recommendations for irrigation scheduling, fertilizer application, and pest management, all accessible through a mobile application for farmers.",
    implementation: [
      "Deployed a network of soil sensors across multiple fields with different crop types",
      "Installed weather stations to monitor local microclimate conditions",
      "Implemented a LoRa-based communication network for rural areas with poor cellular coverage",
      "Developed automated irrigation control systems integrated with soil moisture data",
      "Created a scheduling system for regular drone flights to capture multispectral imagery",
      "Developed algorithms to analyze crop health from multispectral images",
      "Built a mobile application for farmers to access insights and control systems remotely",
    ],
    results: [
      "22% reduction in water usage for irrigation",
      "18% increase in crop yield across monitored fields",
      "30% reduction in fertilizer usage through targeted application",
      "Early detection of pest issues, reducing crop loss by 25%",
      "15% overall reduction in operational costs",
    ],
    challenges: [
      "Ensuring reliable operation of electronic equipment in harsh outdoor environments",
      "Developing power-efficient systems for solar-powered operation",
      "Creating user-friendly interfaces for farmers with varying levels of technical expertise",
      "Calibrating sensors for different soil types and crop requirements",
    ],
    charts: [
      {
        title: "Water Usage Optimization",
        description: "Comparison of water usage before and after system implementation",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "Crop Yield Improvement",
        description: "Yield increases by crop type after implementation",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  "healthcare-monitoring": {
    title: "Remote Patient Monitoring Platform",
    description:
      "Creation of a secure IoT platform for remote patient monitoring, enabling real-time health data collection and analysis.",
    fullDescription:
      "The Remote Patient Monitoring Platform was developed to enable healthcare providers to monitor patients with chronic conditions from their homes. The system collects vital signs and other health metrics, providing early warning of potential health issues and reducing the need for in-person visits.",
    image: "/placeholder.svg?height=500&width=1000",
    industry: "Healthcare",
    duration: "10 months",
    client: "Regional Healthcare Network",
    technologies: ["BLE", "Wearables", "HIPAA Compliance", "Edge Analytics", "Secure Cloud", "Mobile App"],
    challenge:
      "The healthcare network was struggling with the increasing burden of chronic disease management and limited resources for in-person monitoring. They needed a secure, reliable system that could monitor patients remotely while maintaining compliance with healthcare regulations and ensuring patient privacy.",
    solution:
      "We developed a comprehensive remote monitoring platform that integrated with commercial wearable devices and custom medical sensors. The system collected vital signs, medication adherence data, and patient-reported outcomes. Edge computing devices in patients' homes processed sensitive data locally, while anonymized analytics were performed in a HIPAA-compliant cloud environment. Healthcare providers accessed patient data through a secure web portal with automated alerts for concerning readings.",
    implementation: [
      "Selected and integrated compatible medical-grade wearable devices",
      "Developed secure BLE communication protocols for data collection",
      "Created edge computing devices for local data processing and encryption",
      "Implemented a HIPAA-compliant cloud infrastructure for data storage and analysis",
      "Developed machine learning algorithms to detect anomalies in patient data",
      "Created a secure web portal for healthcare providers with role-based access control",
      "Built a mobile application for patients to view their data and receive reminders",
    ],
    results: [
      "42% reduction in emergency room visits for monitored patients",
      "35% decrease in hospital readmissions",
      "Improved medication adherence rates from 65% to 87%",
      "Early detection of health deterioration in 28 high-risk patients",
      "93% patient satisfaction rate with the monitoring system",
    ],
    challenges: [
      "Ensuring data security and privacy compliance with healthcare regulations",
      "Developing reliable algorithms for detecting clinically significant changes in patient data",
      "Creating user-friendly interfaces for elderly patients with limited technical experience",
      "Managing battery life and connectivity issues in patient homes",
    ],
    charts: [
      {
        title: "Hospital Readmission Reduction",
        description: "Comparison of readmission rates before and after implementation",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "Medication Adherence Improvement",
        description: "Tracking of medication adherence rates over time",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  "energy-management": {
    title: "Smart Building Energy Management",
    description:
      "Implementation of an intelligent energy management system for commercial buildings to optimize energy consumption.",
    fullDescription:
      "The Smart Building Energy Management System was designed to reduce energy consumption and operational costs in commercial buildings through intelligent monitoring and control of HVAC, lighting, and other building systems. The solution provides real-time visibility into energy usage patterns and automates optimization strategies.",
    image: "/placeholder.svg?height=500&width=1000",
    industry: "Energy",
    duration: "9 months",
    client: "Commercial Real Estate Management Company",
    technologies: ["Zigbee", "Smart Meters", "HVAC Control", "Dashboard", "Occupancy Sensors", "Machine Learning"],
    challenge:
      "The real estate management company was facing rising energy costs and sustainability requirements across their portfolio of commercial buildings. Traditional building management systems were inefficient and lacked the intelligence to optimize energy usage based on actual occupancy and usage patterns.",
    solution:
      "We implemented a comprehensive energy management system that integrated with existing building infrastructure while adding new IoT sensors and controls. The system monitored energy consumption at a granular level, tracked occupancy patterns, and controlled HVAC and lighting systems in real-time. Machine learning algorithms analyzed historical data to predict usage patterns and optimize settings proactively.",
    implementation: [
      "Installed smart meters and sub-meters to monitor energy consumption by zone and system",
      "Deployed occupancy sensors throughout the buildings to track actual usage patterns",
      "Implemented Zigbee mesh networks for reliable wireless communication",
      "Integrated with existing building management systems via API connections",
      "Developed machine learning models for predictive optimization of HVAC settings",
      "Created an energy management dashboard for facility managers",
      "Implemented automated demand response capabilities for peak load management",
    ],
    results: [
      "27% reduction in overall energy consumption",
      "32% decrease in HVAC-related energy usage",
      "Annual cost savings of approximately $215,000 across the building portfolio",
      "Improved tenant comfort through more responsive temperature control",
      "Enhanced sustainability reporting capabilities for ESG requirements",
    ],
    challenges: [
      "Integrating with diverse legacy building management systems",
      "Ensuring reliable wireless connectivity in challenging building environments",
      "Balancing energy efficiency with occupant comfort requirements",
      "Developing accurate occupancy prediction models for diverse usage patterns",
    ],
    charts: [
      {
        title: "Energy Consumption Reduction",
        description: "Monthly energy usage before and after system implementation",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "Cost Savings Analysis",
        description: "Breakdown of cost savings by building system",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  "retail-analytics": {
    title: "Retail Customer Analytics System",
    description:
      "Deployment of an in-store customer analytics solution using IoT sensors to track foot traffic and optimize store layout.",
    fullDescription:
      "The Retail Customer Analytics System was developed to provide retailers with detailed insights into customer behavior within physical stores. The system tracks customer movement patterns, dwell times, and engagement with products to optimize store layouts, staffing, and merchandising strategies.",
    image: "/placeholder.svg?height=500&width=1000",
    industry: "Retail",
    duration: "5 months",
    client: "National Retail Chain",
    technologies: ["BLE Beacons", "WiFi Tracking", "Heat Mapping", "Analytics", "Computer Vision", "Dashboard"],
    challenge:
      "The retail chain was experiencing declining in-store sales and lacked insights into how customers were interacting with their physical spaces. They needed to understand customer behavior patterns to optimize store layouts, product placements, and staffing levels to improve conversion rates and average transaction values.",
    solution:
      "We implemented a comprehensive customer analytics system using a combination of BLE beacons, WiFi tracking, and anonymous computer vision analysis. The system tracked customer movement patterns, dwell times at different store sections, and engagement with specific product displays. The data was analyzed to create heat maps, flow patterns, and conversion metrics that informed store optimization strategies.",
    implementation: [
      "Installed BLE beacons throughout the stores for zone-based tracking",
      "Implemented WiFi tracking for anonymous customer journey mapping",
      "Deployed computer vision cameras for traffic counting and heat mapping",
      "Developed privacy-compliant data collection and anonymization processes",
      "Created a real-time analytics platform with custom retail metrics",
      "Built interactive dashboards for store managers and corporate teams",
      "Integrated with point-of-sale data for conversion analysis",
    ],
    results: [
      "18% increase in conversion rate after store layout optimization",
      "23% improvement in average transaction value through better product placement",
      "Optimized staffing schedules resulting in 12% labor cost reduction",
      "Identified underperforming product displays for merchandising improvements",
      "15% increase in customer dwell time in high-margin product areas",
    ],
    challenges: [
      "Ensuring customer privacy while collecting detailed behavioral data",
      "Achieving reliable indoor positioning accuracy in complex store environments",
      "Processing and analyzing large volumes of real-time tracking data",
      "Creating actionable insights from complex customer journey data",
    ],
    charts: [
      {
        title: "Conversion Rate Improvement",
        description: "Store conversion rates before and after layout optimization",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "Customer Flow Analysis",
        description: "Heat map showing customer movement patterns in store",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  */
  "distributed-agriculture-algorithms": {
    title: "Distributed Algorithms for Smart Agriculture",
    description:
      "Implementation of a distributed monitoring system for smart agriculture using LEACH and LEACH-C clustering algorithms to optimize energy efficiency and scalability.",
    fullDescription:
      "This project implemented a distributed monitoring system for smart agriculture using interconnected sensors and decentralized algorithms (LEACH & LEACH-C). The objective was to enhance scalability, energy efficiency, and decision-making across large dynamic fields without centralized bottlenecks.",
    image: "/images/agricilture.png",
    industry: "Agriculture",
    duration: "3 months",
    client: "University Research Project",
    technologies: ["IoT", "Distributed Systems", "Wireless Sensor Networks", "LEACH", "LEACH-C", "Clustering", "Data Optimization"],
    challenge:
      "Modern agriculture demands high efficiency and adaptability. Centralized monitoring often fails in real-time responsiveness and scalability across vast fields. The challenge was to design a system that adapts to dynamic environments, manages energy constraints, and sustains reliable communication.",
    solution:
      "Two clustering-based distributed algorithms were implemented: LEACH, a lightweight probabilistic protocol for forming energy-efficient clusters, and LEACH-C with K-Means & Cuckoo Search, offering centralized clustering with enhanced optimization and adaptability for dynamic environments. Both algorithms were modeled using Python and SimPy, simulating real-time mobile sensor scenarios.",
    implementation: [
      "Developed models of LEACH and LEACH-C clustering algorithms",
      "Implemented K-Means clustering for comparative analysis",
      "Created a Cuckoo Search optimization algorithm for cluster head selection",
      "Built simulation environment using Python and SimPy for real-time testing",
      "Modeled dynamic sensor node mobility for realistic agricultural scenarios",
      "Designed energy consumption models for accurate performance measurement",
      "Conducted extensive performance testing across various network configurations"
    ],
    results: [
      "LEACH-C with Cuckoo Search outperformed all variants in energy conservation and network longevity",
      "K-Means clustering showed faster convergence but less energy efficiency in dynamic networks",
      "LEACH demonstrated good initial performance but lacked long-term stability",
      "Dynamic model using LEACH-C + Cuckoo Search proved most effective for real-world agriculture use cases"
    ],
    challenges: [
      "Balancing energy optimization with system reliability requirements",
      "Ensuring time synchronization across mobile sensor nodes",
      "Implementing efficient clustering and consensus mechanisms",
      "Adapting to unpredictable environmental changes"
    ],
    
    charts: [],
    pdfReport: {
      url: "/reports/Projet_Final___Algorithmes_Répartis.pdf",
      language: "French",
      description: "Comprehensive research report detailing the theoretical foundations and practical implementation of distributed algorithms for agricultural monitoring systems, including LEACH and LEACH-C variants."
    }
  }
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  // Properly unwrap the params object with React.use()
  const unwrappedParams = React.use(Promise.resolve(params))
  const caseStudyId = unwrappedParams.id as keyof typeof caseStudies
  const caseStudy = caseStudies[caseStudyId]

  // If the case study doesn't exist, return 404
  if (!caseStudy) {
    notFound()
  }

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        {/* Back button that links to the case studies page */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/case-studies" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
        </Button>

        {/* Use client component for animations and interactions */}
        <CaseStudyClientContent caseStudy={caseStudy} />
      </div>
    </PageTransition>
  )
}
