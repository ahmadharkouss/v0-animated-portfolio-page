"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface LocationMapProps {
  className?: string
}

export function LocationMap({ className = "" }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Dynamic import of Leaflet only on the client side
    const initializeMap = async () => {
      try {
        const L = (await import("leaflet")).default

        // Import Leaflet CSS
        await import("leaflet/dist/leaflet.css")

        if (!mapRef.current || isMapLoaded) return

        // Fix for Leaflet icon issues in Next.js
        delete L.Icon.Default.prototype._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        })

        // Lyon, France coordinates
        const lyonCoordinates: [number, number] = [45.764, 4.8357]

        // Initialize map
        const map = L.map(mapRef.current).setView(lyonCoordinates, 13)

        // Add tile layer (OpenStreetMap)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map)

        // Add marker for Lyon
        const marker = L.marker(lyonCoordinates).addTo(map)
        marker.bindPopup("<b>Lyon, France</b><br>My Location").openPopup()

        // Add circle around the location
        L.circle(lyonCoordinates, {
          color: "#7C3AED",
          fillColor: "#22D3EE",
          fillOpacity: 0.2,
          radius: 1000,
        }).addTo(map)

        setIsMapLoaded(true)

        // Cleanup function
        return () => {
          map.remove()
        }
      } catch (error) {
        console.error("Error loading map:", error)
      }
    }

    initializeMap()
  }, [isMapLoaded])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-lg overflow-hidden border-2 border-purple-light/30 ${className}`}
    >
      {/* Fallback content while map is loading */}
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
          <div className="text-center p-4">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}
      <div ref={mapRef} className="h-full w-full min-h-[300px]" />
    </motion.div>
  )
}
