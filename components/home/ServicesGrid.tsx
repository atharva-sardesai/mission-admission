import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/constants'
import services from '@/data/services.json'

const iconEmoji: Record<string, string> = {
  compass: '🧭',
  target: '🎯',
  'list-checks': '✅',
  'file-text': '📄',
  'indian-rupee': '💰',
  globe: '🌐',
}

export default function ServicesGrid() {
  return (
    <section className="bg-[#0A1628] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-2">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Complete Admission Support — Start to Finish
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don&apos;t just give advice — we handhold you through every step from exam strategy to
            the day you join your dream college.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#112240] rounded-xl p-6 border border-white/5 hover:border-[#C9A84C]/30 hover:shadow-xl transition-all duration-200 group"
            >
              <div className="text-4xl mb-4">{iconEmoji[service.icon] || '📋'}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#C9A84C] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.shortDescription}
              </p>
              <ul className="space-y-1 mb-5">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-4 h-4 bg-[#22C55E]/20 text-[#22C55E] rounded-full flex items-center justify-center text-xs flex-shrink-0">
                      ✓
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href={buildWhatsAppLink(`Hi Mission Admission, I need help with ${service.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-semibold hover:gap-2 transition-all"
              >
                Get Started →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={buildWhatsAppLink(WHATSAPP_MESSAGES.booking)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E0BF6F] text-[#0A1628] font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Book a Free 15-Min Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
