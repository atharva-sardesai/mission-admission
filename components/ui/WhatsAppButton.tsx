'use client'

import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/constants'

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-4 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group"
      style={{ padding: '12px 16px' }}
    >
      <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.6.9-.8 1.1-.1.2-.3.2-.5.1-1.4-.7-2.3-1.2-3.3-2.8-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.6 4.2.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.6-.4z"/>
        <path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 5.9L.1 23.3l5.6-1.5c1.7.9 3.5 1.4 5.3 1.4 6.6 0 12-5.4 12-12S18.6 0 12 0zm0 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.5.9.9-3.4-.2-.4C2.7 15.5 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8z"/>
      </svg>
      <span className="font-semibold text-sm hidden sm:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Chat with us
      </span>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
    </a>
  )
}
