import type { Metadata } from 'next'
import { buildWhatsAppLink, BRAND } from '@/lib/constants'
import services from '@/data/services.json'

export const metadata: Metadata = {
  title: 'Admission Counselling Services — JEE, MHT-CET, NEET, CAP Round & More',
  description:
    'Explore Mission Admission\'s complete range of services: JEE, MHT-CET, NEET counselling, CAP round guidance, NRI quota admissions, scholarship assistance, and more.',
}

const iconEmoji: Record<string, string> = {
  compass: '🧭',
  target: '🎯',
  'list-checks': '✅',
  'file-text': '📄',
  'indian-rupee': '💰',
  globe: '🌐',
}

const additionalServices = [
  {
    icon: '📋',
    title: 'JEE Main & Advanced Counselling',
    desc: 'Personalized JEE preparation strategy, JoSAA / CSAB counselling, NIT/IIT college selection, and branch preference guidance.',
    forWhom: 'Class 11-12 students targeting IITs, NITs, and IIITs',
    cta: 'Get JEE Counselling',
    msg: 'Hi Mission Admission, I need counselling for JEE Main/Advanced',
  },
  {
    icon: '📐',
    title: 'MHT-CET Engineering Counselling',
    desc: 'Complete MHT-CET strategy, CAP round option form guidance, cutoff analysis, and seat monitoring across all 3 rounds.',
    forWhom: 'Maharashtra students targeting engineering colleges via CAP rounds',
    cta: 'Get MHT-CET Counselling',
    msg: 'Hi Mission Admission, I need help with MHT-CET and CAP round',
  },
  {
    icon: '🩺',
    title: 'NEET Medical Counselling',
    desc: 'NEET preparation planning, state quota vs All India Quota strategy, Maharashtra medical college selection, and MCC counselling support.',
    forWhom: 'Students targeting MBBS/BDS seats in Maharashtra and across India',
    cta: 'Get NEET Counselling',
    msg: 'Hi Mission Admission, I need counselling for NEET and medical admissions',
  },
  {
    icon: '🔄',
    title: 'CAP Round Management',
    desc: 'End-to-end Maharashtra CAP round support — option form strategy, real-time round monitoring, upgrade vs freeze decisions.',
    forWhom: 'Students with MHT-CET or JEE scores seeking Maharashtra engineering seats',
    cta: 'Get CAP Round Help',
    msg: 'Hi Mission Admission, I need help with Maharashtra CAP round counselling',
  },
  {
    icon: '🌏',
    title: 'NRI Quota Admissions',
    desc: 'Specialized guidance for NRI quota admissions: documentation, college options, fee structures, and application process in top Maharashtra institutions.',
    forWhom: 'NRI candidates or students with NRI relatives seeking admission under NRI quota',
    cta: 'Get NRI Quota Guidance',
    msg: 'Hi Mission Admission, I need guidance on NRI quota admissions',
  },
  {
    icon: '💼',
    title: 'MBA Admission Counselling',
    desc: 'CAT, CMAT, Maharashtra MBA CET preparation strategy, B-school selection, GD-PI preparation, and MBA college choice guidance.',
    forWhom: 'Graduates and working professionals targeting top MBA programs',
    cta: 'Get MBA Counselling',
    msg: 'Hi Mission Admission, I need counselling for MBA admissions',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0A1628] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Complete Admission Support — <br className="hidden sm:block" />
            <span className="text-[#C9A84C]">Start to Finish</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Whether you&apos;re just starting your preparation or sitting with results in hand, we
            have a service designed for exactly where you are right now.
          </p>
          <a
            href={buildWhatsAppLink('Hi Mission Admission, I want to know about your counselling services')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            📞 Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-[#E8F0FF] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A1628] text-center mb-12">Core Counselling Services</h2>
          <div className="space-y-6">
            {services.map((s, i) => (
              <div
                key={s.id}
                className={`bg-white rounded-2xl p-7 sm:p-9 shadow-sm flex flex-col lg:flex-row gap-8 ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{iconEmoji[s.icon] || '📋'}</span>
                    <h3 className="text-[#0A1628] font-bold text-xl">{s.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-5 leading-relaxed">{s.fullDescription}</p>
                  <div className="bg-[#E8F0FF] rounded-xl p-4 mb-5">
                    <p className="text-sm font-semibold text-[#0A1628] mb-1">Who is this for?</p>
                    <p className="text-gray-600 text-sm">{s.whoFor}</p>
                  </div>
                  <a
                    href={buildWhatsAppLink(`Hi Mission Admission, I need help with ${s.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-[#0A1628] text-[#C9A84C] font-bold px-6 py-3 rounded-xl hover:bg-[#112240] transition-colors text-sm"
                  >
                    Start with {s.title} →
                  </a>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-[#0A1628] rounded-xl p-5 h-full">
                    <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-4">
                      How It Works
                    </p>
                    <ol className="space-y-3">
                      {s.process.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-[#C9A84C]/20 text-[#C9A84C] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-gray-300 text-sm leading-snug">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam-specific services */}
      <section className="bg-[#0A1628] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-2">Exam-Specific</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Counselling by Exam Type</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((s) => (
              <div
                key={s.title}
                className="bg-[#112240] rounded-xl p-6 border border-white/5 hover:border-[#C9A84C]/30 transition-all group"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#C9A84C] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{s.desc}</p>
                <p className="text-xs text-[#C9A84C]/70 italic mb-4">For: {s.forWhom}</p>
                <a
                  href={buildWhatsAppLink(s.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-semibold hover:gap-2 transition-all"
                >
                  {s.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C9A84C] py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-[#0A1628]/80 mb-6">
            Call or WhatsApp us for a free 15-minute consultation. We&apos;ll help you figure out exactly
            what support you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={buildWhatsAppLink('Hi Mission Admission, I want a free 15-minute consultation to understand which service I need')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0A1628] text-[#C9A84C] font-bold px-7 py-3.5 rounded-xl hover:bg-[#112240] transition-colors"
            >
              💬 WhatsApp for Free Consultation
            </a>
            <a
              href={`tel:${BRAND.phone.primary}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0A1628] text-[#0A1628] font-bold px-7 py-3.5 rounded-xl hover:bg-[#0A1628] hover:text-[#C9A84C] transition-colors"
            >
              📞 {BRAND.phone.primary}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
