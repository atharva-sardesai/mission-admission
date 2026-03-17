import { buildWhatsAppLink, WHATSAPP_MESSAGES, BRAND } from '@/lib/constants'

const packages = [
  {
    name: 'Basic Counselling',
    price: '₹5,000',
    tagline: 'Great for students who need direction',
    features: [
      'One-time 60-min counselling session',
      'College shortlist (up to 10 colleges)',
      'Basic CAP round option form guidance',
      'Document checklist',
      'WhatsApp support for 1 month',
    ],
    cta: 'Get Basic Package',
    whatsappMsg: WHATSAPP_MESSAGES.basic,
    highlighted: false,
  },
  {
    name: 'Complete Admission Support',
    price: '₹15,000',
    tagline: 'Most popular — end-to-end support',
    features: [
      'Everything in Basic Package',
      'Exam strategy & preparation planning',
      'All CAP round monitoring & guidance',
      'Option form priority strategy',
      'Seat upgrade/freeze advisory',
      'Scholarship identification',
      'Priority WhatsApp support for 3 months',
      'Free follow-up sessions as needed',
    ],
    cta: 'Get Complete Package',
    whatsappMsg: WHATSAPP_MESSAGES.complete,
    highlighted: true,
  },
  {
    name: 'Premium Package',
    price: '₹25,000',
    tagline: 'For JEE/NEET + CET multi-exam strategy',
    features: [
      'Everything in Complete Package',
      'Multi-exam strategy (JEE + CET or NEET)',
      'NRI quota admission guidance',
      'JoSAA / CSAB counselling support',
      'Scholarship application support',
      'Education loan facilitation',
      'Priority WhatsApp + phone support',
      'Parent counselling sessions',
    ],
    cta: 'Get Premium Package',
    whatsappMsg: WHATSAPP_MESSAGES.premium,
    highlighted: false,
  },
]

export default function PricingCards() {
  return (
    <section className="bg-[#0A1628] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-2">
            Counselling Packages
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Choose Your Counselling Package
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Every package includes real, personalized guidance
            from experienced counsellors — not automated tools or generic advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                pkg.highlighted
                  ? 'bg-[#C9A84C] text-[#0A1628] shadow-2xl shadow-[#C9A84C]/20 scale-105'
                  : 'bg-[#112240] text-white border border-white/10'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3
                  className={`font-bold text-xl mb-1 ${
                    pkg.highlighted ? 'text-[#0A1628]' : 'text-white'
                  }`}
                >
                  {pkg.name}
                </h3>
                <p className={`text-sm ${pkg.highlighted ? 'text-[#0A1628]/70' : 'text-gray-400'}`}>
                  {pkg.tagline}
                </p>
                <div
                  className={`text-4xl font-bold mt-3 font-display ${
                    pkg.highlighted ? 'text-[#0A1628]' : 'text-[#C9A84C]'
                  }`}
                >
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span
                      className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0 font-bold ${
                        pkg.highlighted
                          ? 'bg-[#0A1628]/20 text-[#0A1628]'
                          : 'bg-[#22C55E]/20 text-[#22C55E]'
                      }`}
                    >
                      ✓
                    </span>
                    <span className={pkg.highlighted ? 'text-[#0A1628]/90' : 'text-gray-300'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={buildWhatsAppLink(pkg.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center font-bold py-3.5 rounded-xl transition-all duration-200 ${
                  pkg.highlighted
                    ? 'bg-[#0A1628] text-[#C9A84C] hover:bg-[#112240]'
                    : 'bg-[#C9A84C] text-[#0A1628] hover:bg-[#E0BF6F]'
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Not sure which package?{' '}
          <a
            href={`tel:${BRAND.phone.primary}`}
            className="text-[#C9A84C] font-semibold hover:underline"
          >
            Call us for a free 15-minute consultation
          </a>
        </p>
      </div>
    </section>
  )
}
