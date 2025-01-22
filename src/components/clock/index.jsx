'use client'
import { useState, useEffect } from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
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

  const hours = formatNumber(formatHours(time.getHours()))
  const minutes = formatNumber(time.getMinutes())
  const seconds = formatNumber(time.getSeconds())
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM'
  
  // Get timezone abbreviation
  const timezone = time.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2]

  return (
    <div className="text-white flex justify-center p-[30px] text-xl">
      {hours}:{minutes}:{seconds} {ampm} {timezone}
    </div>
  )
}
