'use client'
import React, { useState } from 'react'
import classNames from 'classnames'

export function AnimatedCard({ children, className }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={classNames(
        'relative rounded-lg border border-green-800 bg-green-950 p-1 transition-shadow duration-300',
        hovered ? 'shadow-[0_0_20px_2px_rgba(34,197,94,0.4)]' : 'shadow-none',
        className
      )}
    >
      <div className="relative z-10 rounded-md bg-green-950 text-green-100">
        {children}
      </div>
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-lg border border-green-400"
          style={{
            maskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 20%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 20%, transparent 80%)`,
            opacity: 0.5,
            transition: 'all 0.15s ease'
          }}
        />
      )}
    </div>
  )
}
