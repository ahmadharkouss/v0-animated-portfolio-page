"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

interface StaticMapProps {
  className?: string
}

export function StaticMap({ className = "" }: StaticMapProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-lg overflow-hidden border-2 border-navy-light/30 ${className}`}
    >
      <div className="h-full w-full min-h-[300px] bg-gradient-to-br from-navy-light/5 to-emerald-light/5 flex items-center justify-center">
        <div className="text-center p-6 max-w-xs">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-navy-light/20 to-emerald-light/20 flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-navy-light" />
          </div>
          <h3 className="text-xl font-medium mb-2">Lyon, France</h3>
          <p className="text-muted-foreground">
            Located in the Auvergne-Rhône-Alpes region, Lyon is known for its historical architecture, gastronomy, and
            vibrant tech scene.
          </p>
          <div className="mt-4 text-sm text-navy-light">Coordinates: 45.764° N, 4.8357° E</div>
        </div>
      </div>
    </motion.div>
  )
}
