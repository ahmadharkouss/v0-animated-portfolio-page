"use client"

import { useEffect } from "react"

export function useScrollTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}
