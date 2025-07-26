'use client'
import { createContext, useEffect, useState } from 'react'

export const ThemeColorContext = createContext()

export function ThemeColorProvider({ children }) {
  const [color, setColor] = useState('green')

  useEffect(() => {
    const storedColor = localStorage.getItem('userColorTheme')
    if (storedColor) setColor(storedColor)
  }, [])

  const changeColor = (newColor) => {
    setColor(newColor)
    localStorage.setItem('userColorTheme', newColor)
  }

  return (
    <ThemeColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ThemeColorContext.Provider>
  )
}