'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
}

export default function CounterAnimation({ value, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = 0
          const end = value
          const stepTime = Math.max(Math.floor(duration / end), 16)
          let current = start
          const timer = setInterval(() => {
            current += Math.ceil(end / (duration / stepTime))
            if (current >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, stepTime)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
