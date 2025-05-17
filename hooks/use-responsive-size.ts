"use client"

import { useState, useEffect } from "react"

export function useResponsiveSize(defaultSize: { width: number; height: number }) {
  const [size, setSize] = useState(defaultSize)

  useEffect(() => {
    // Function to update size based on window width
    const updateSize = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth

        if (width < 640) {
          // Mobile
          setSize({
            width: Math.round(defaultSize.width * 0.8),
            height: Math.round(defaultSize.height * 0.8),
          })
        } else if (width < 1024) {
          // Tablet
          setSize({
            width: Math.round(defaultSize.width * 0.9),
            height: Math.round(defaultSize.height * 0.9),
          })
        } else {
          // Desktop
          setSize(defaultSize)
        }
      }
    }

    // Initial call
    updateSize()

    // Add event listener
    window.addEventListener("resize", updateSize)

    // Cleanup
    return () => window.removeEventListener("resize", updateSize)
  }, [defaultSize])

  return size
}
