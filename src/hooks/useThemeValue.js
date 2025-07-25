'use client'
import { useEffect, useState } from 'react'

export function useThemeValue() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedTheme') || 'green'
    }
    return 'green'
  })

  useEffect(() => {
    localStorage.setItem('selectedTheme', theme)
  }, [theme])

  useEffect(() => {
    const handleStorage = () => {
      const updated = localStorage.getItem('selectedTheme')
      if (updated) setTheme(updated)
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  return [theme, setTheme]
}
