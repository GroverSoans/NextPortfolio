'use client'
import { useState, useEffect } from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (number) => {
    return number.toString().padStart(2, '0')
  }

  const formatHours = (hours) => {
    return hours % 12 || 12 // Convert 24h to 12h format
  }

  // Don't render anything until mounted (client-side)
  if (!mounted) return null

  const hours = formatNumber(formatHours(time.getHours()))
  const minutes = formatNumber(time.getMinutes())
  const seconds = formatNumber(time.getSeconds())
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM'
  
  // Get timezone abbreviation
  const timezone = time.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2]

  return (
    <div>
      {hours}:{minutes}:{seconds} {ampm} {timezone}
    </div>
  )
}
