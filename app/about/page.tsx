import type { Metadata } from 'next'
import { buildWhatsAppLink, WHATSAPP_MESSAGES, BRAND, STATS } from '@/lib/constants'
import CounterAnimation from '@/components/ui/CounterAnimation'

export const metadata: Metadata = {
  title: 'About Mission Admission — 15+ Years of Guiding Students in Pune',
  description:
    "Learn about Mission Admission's story, our founder's vision, and what makes us Pune's most trusted admission counselling platform for JEE, MHT-CET, NEET and MBA.",
}

const differentiators = [
  {
    emoji: '🎯',
    title: 'One-on-One Personalized Counselling',
    desc: 'Every student gets individual attention. We never do batch counselling — your situation is unique and deserves a unique strategy.',
  },
  {
    emoji: '📊',
    title: 'Data-Driven College Recommendations',
    desc: '3+ years of cutoff data, placement records, fee structures, and college reputation analysis — not guesswork.',
  },
  {
    emoji: '🤝',
    title: 'End-to-End Hand-Holding',
    desc: "From exam strategy to the day you report to college — we're with you at every step. Not just advice, but actual support.",
  },
  {
    emoji: '🏆',
    title: 'Proven Track Record',
    desc: 'IITs, NITs, COEP, VJTI, top medical colleges — our students have made it to the best institutions across India.',
  },
  {
    emoji: '🏙️',
    title: 'Local Maharashtra Expertise',
    desc: 'Deep knowledge of Maharashtra CAP rounds, DTE processes, and state-specific scholarships — we know this system inside out.',
  },
  {
    emoji: '💬',
    title: 'Always Accessible',
    desc: 'During counselling season, we respond on WhatsApp even outside office hours. Your deadline is our deadline.',
  },
]

const milestones = [
  { year: '2009', title: 'Founded in Pune', desc: 'Mission Admission started with a single vision: give every student access to the same quality of guidance that top students receive.' },
  { year: '2012', title: 'First IIT Success', desc: 'Our first student cracked JEE Advanced and joined IIT Bombay. Proof that the right guidance changes outcomes.' },
  { year: '2015', title: '100+ Students Milestone', desc: 'Crossed 100 students guided. Expanded to cover MHT-CET CAP round counselling comprehensively.' },
  { year: '2018', title: 'Toppers Talk Launched', desc: 'Started our YouTube series featuring honest conversations with toppers — now one of Maharashtra\'s most trusted admission resources.' },
  { year: '2022', title: 'NRI Quota Specialization', desc: 'Added specialized services for NRI quota admissions, helping families abroad navigate Maharashtra\'s complex admission system.' },
  { year: '2026', title: '500+ Students Guided', desc: 'Today, Mission Admission has guided 500+ students to their dream colleges — and this number grows every counselling season.' },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0A1628] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              15+ Years of Guiding Students to Their Dream Colleges
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Mission Admission was founded with one belief: every student deserves the same quality
              of admission guidance, regardless of their background or resources. Based in Balewadi,
              Pune, we&apos;ve been doing exactly that for over 15 years.
            </p>
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.booking)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E0BF6F] text-[#0A1628] font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#112240] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl sm:text-5xl font-bold text-[#C9A84C] font-display">
                  <CounterAnimation value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#0A1628] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why Mission Admission Exists
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  When Prashant Sir started Mission Admission in Pune, he noticed a stark reality:
                  students from well-connected families had access to expert guidance that helped them
                  navigate complex admission processes, while equally talented students without such
                  networks were left to figure it out alone — often making costly mistakes.
                </p>
                <p>
                  That gap in access inspired the founding of Mission Admission. The goal was simple:
                  provide every student — regardless of background — with the same quality of
                  personalized, data-driven counselling that makes the difference between getting into
                  your dream college and missing out by a few percentage points.
                </p>
                <p>
                  Today, with 500+ students guided to their dream colleges — including IITs, NITs,
                  COEP, VJTI, and top medical colleges — Mission Admission has become the most trusted
                  name in admission counselling in Pune.
                </p>
                <p className="text-[#C9A84C] font-medium italic">
                  &ldquo;{BRAND.tagline}&rdquo;
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {differentiators.slice(0, 4).map((d) => (
                <div
                  key={d.title}
                  className="bg-[#112240] rounded-xl p-5 border border-white/5 hover:border-[#C9A84C]/30 transition-colors"
                >
                  <div className="text-3xl mb-2">{d.emoji}</div>
                  <h3 className="text-white font-semibold text-sm mb-1">{d.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="bg-[#E8F0FF] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">What Makes Mission Admission Different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{d.emoji}</div>
                <h3 className="text-[#0A1628] font-bold text-base mb-2">{d.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#0A1628] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-2">Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 sm:-translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-6 sm:gap-8 ${
                    i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Year dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-[#C9A84C] rounded-full -translate-x-1/2 mt-1.5 z-10" />
                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block sm:w-1/2" />
                  {/* Content */}
                  <div className={`pl-12 sm:pl-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8 sm:text-right'}`}>
                    <span className="text-[#C9A84C] font-bold text-sm">{m.year}</span>
                    <h3 className="text-white font-bold text-lg mt-0.5">{m.title}</h3>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C9A84C] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Ready to Start Your Admission Journey?
          </h2>
          <p className="text-[#0A1628]/80 mb-8 text-lg">
            Join 500+ students who trusted Mission Admission with the most important decision of
            their academic life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.booking)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0A1628] text-[#C9A84C] font-bold px-8 py-4 rounded-xl hover:bg-[#112240] transition-colors"
            >
              📞 Book Free Session
            </a>
            <a
              href={`tel:${BRAND.phone.primary}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0A1628] text-[#0A1628] font-bold px-8 py-4 rounded-xl hover:bg-[#0A1628] hover:text-[#C9A84C] transition-colors"
            >
              Call {BRAND.phone.primary}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
