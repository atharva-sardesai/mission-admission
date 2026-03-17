import Link from 'next/link'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { BRAND, buildWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/constants'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/exams', label: 'Exams We Cover' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const examLinks = [
  { href: '/exams#jee-main', label: 'JEE Main & Advanced' },
  { href: '/exams#mht-cet', label: 'MHT-CET' },
  { href: '/exams#neet', label: 'NEET UG' },
  { href: '/exams#cap-round', label: 'CAP Round Guidance' },
  { href: '/exams#bitsat', label: 'BITSAT / VITEEE' },
  { href: '/exams#cat-mba', label: 'CAT / MBA CET' },
  { href: '/exams#nri-quota', label: 'NRI Quota' },
]

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#C9A84C] rounded-lg flex items-center justify-center font-bold text-[#0A1628] text-sm">
                MA
              </div>
              <div>
                <div className="text-white font-bold text-base">Mission Admission</div>
                <div className="text-[#C9A84C] text-xs">Pune, Maharashtra</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              {BRAND.tagline}
            </p>
            <p className="text-xs italic text-[#C9A84C] mb-5">{BRAND.taglineMarathi}</p>
            <div className="flex items-center gap-4">
              <a href={BRAND.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#C9A84C] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zm-14 9.4V8.4l6.3 3.6-6.3 3.6z"/></svg>
              </a>
              <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#C9A84C] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.2-.1-4.8-1.7-4.9-4.9-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.2c1.2-.1 1.6-.1 4.8-.1zm0 2.1c-3.1 0-3.5 0-4.7.1-2.2.1-3.2 1.1-3.3 3.3-.1 1.2-.1 1.5-.1 4.3s0 3.1.1 4.3c.1 2.2 1.1 3.2 3.3 3.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c2.2-.1 3.2-1.1 3.3-3.3.1-1.2.1-1.5.1-4.3s0-3.1-.1-4.3c-.1-2.2-1.1-3.2-3.3-3.3-1.2-.1-1.6-.1-4.7-.1zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 2.1a2.9 2.9 0 1 0 0 5.8A2.9 2.9 0 0 0 12 9.1zm5.2-3.7a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>
              </a>
              <a href={BRAND.social.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-[#C9A84C] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.9 8.2l-2 9.5c-.1.6-.5.8-1 .5l-2.8-2.1-1.3 1.3c-.2.2-.3.3-.6.3l.2-2.9 5-4.5c.2-.2 0-.3-.3-.1l-6.2 3.9-2.7-.8c-.6-.2-.6-.6.1-.8l10.5-4.1c.5-.2 1 .1.8.8z"/></svg>
              </a>
              <a href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.6.9-.8 1.1-.1.2-.3.2-.5.1-1.4-.7-2.3-1.2-3.3-2.8-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.6 4.2.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.6-.4z"/><path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 5.9L.1 23.3l5.6-1.5c1.7.9 3.5 1.4 5.3 1.4 6.6 0 12-5.4 12-12S18.6 0 12 0zm0 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.5.9.9-3.4-.2-.4C2.7 15.5 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-[#C9A84C] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exam Guidance */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Exam Guidance</h3>
            <ul className="space-y-2">
              {examLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-[#C9A84C] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#C9A84C]" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={15} className="flex-shrink-0 text-[#C9A84C]" />
                <a href={`tel:${BRAND.phone.primary}`} className="hover:text-white">
                  {BRAND.phone.primary}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={15} className="flex-shrink-0 text-[#C9A84C]" />
                <a href={`tel:${BRAND.phone.secondary}`} className="hover:text-white">
                  {BRAND.phone.secondary}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={15} className="flex-shrink-0 text-[#C9A84C]" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Clock size={15} className="flex-shrink-0 text-[#C9A84C]" />
                <span>{BRAND.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="mb-8 rounded-xl overflow-hidden h-48 border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.099534768263!2d73.76861!3d18.574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e5e8c3c7c5%3A0x0!2sBalewadi%2C+Pune!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mission Admission Office Location"
          />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 Mission Admission. All Rights Reserved.</p>
          <p className="text-[#C9A84C]">Trusted by 500+ families across Maharashtra</p>
        </div>
      </div>
    </footer>
  )
}
