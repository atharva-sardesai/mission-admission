'use client'

import { buildWhatsAppLink, WHATSAPP_MESSAGES, BRAND, STATS } from '@/lib/constants'
import CounterAnimation from '@/components/ui/CounterAnimation'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0A1628] flex flex-col justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628]/95 to-[#112240]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse" />
            <span className="text-[#C9A84C] text-sm font-medium">Counselling Season 2026 is Open</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5">
            Pune&apos;s Most Trusted Counselling Platform for{' '}
            <span className="text-[#C9A84C]">Engineering, Medical</span>{' '}
            &amp; MBA Admissions
          </h1>

          {/* Sub-headline */}
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl">
            From JEE &amp; MHT-CET strategy to CAP round guidance — we are with every student at
            every step. 500+ students guided to their dream colleges.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.booking)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-orange-500 text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg shadow-orange-900/30 transition-all duration-200 hover:scale-105 active:scale-100"
            >
              📞 Book Free Counselling Session
            </a>
            <a
              href={BRAND.googleForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-[#C9A84C] hover:text-[#C9A84C] font-bold text-base px-7 py-4 rounded-xl transition-all duration-200"
            >
              📋 Fill Enquiry Form
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-14">
            {['500+ Students Guided', '15+ Years Experience', '50+ Top Colleges', '100% Personalized'].map(
              (badge) => (
                <span
                  key={badge}
                  className="bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-1.5 rounded-full"
                >
                  ✓ {badge}
                </span>
              )
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-[#C9A84C] font-display">
                  <CounterAnimation value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs animate-bounce">
        <span>Scroll to explore</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
