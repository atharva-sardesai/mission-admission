import Link from 'next/link'
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A1628] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-[#C9A84C] mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          Looks like this page got lost during CAP rounds. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E0BF6F] text-[#0A1628] font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Go to Homepage
          </Link>
          <a
            href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  )
}
