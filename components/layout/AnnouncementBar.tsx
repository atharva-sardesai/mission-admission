'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import announcements from '@/data/announcements.json'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const dismissed = localStorage.getItem('announcement-dismissed')
    if (dismissed) setVisible(false)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  const ann = announcements[current]

  return (
    <div className="bg-gold text-navy-DEFAULT text-sm font-medium py-2 px-4 flex items-center justify-between relative z-50">
      <div className="flex-1 text-center">
        <span>{ann.text}</span>
        {ann.link && (
          <a
            href={ann.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 underline font-semibold hover:opacity-80"
          >
            {ann.linkText}
          </a>
        )}
      </div>
      <button
        onClick={() => {
          setVisible(false)
          localStorage.setItem('announcement-dismissed', '1')
        }}
        aria-label="Dismiss announcement"
        className="ml-4 p-1 hover:opacity-70 flex-shrink-0"
      >
        <X size={14} />
      </button>
    </div>
  )
}
