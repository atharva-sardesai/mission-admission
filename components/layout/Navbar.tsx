'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { BRAND, buildWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/constants'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/exams', label: 'Exams' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#0A1628] shadow-lg' : 'bg-[#0A1628]/95'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 bg-[#C9A84C] rounded-lg flex items-center justify-center font-bold text-[#0A1628] text-sm">
            MA
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-bold text-base leading-tight">Mission Admission</div>
            <div className="text-[#C9A84C] text-xs leading-tight">Right Guidance, Right Time</div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-[#C9A84C] text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BRAND.phone.primary}`}
            className="flex items-center gap-1 text-gray-300 hover:text-white text-sm"
          >
            <Phone size={14} />
            {BRAND.phone.primary}
          </a>
          <a
            href={buildWhatsAppLink(WHATSAPP_MESSAGES.booking)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] hover:bg-[#E0BF6F] text-[#0A1628] font-bold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Book Session
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0A1628] border-t border-white/10 px-4 pb-4">
          <ul className="flex flex-col gap-1 mt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-gray-300 hover:text-[#C9A84C] font-medium border-b border-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${BRAND.phone.primary}`}
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-medium py-3 rounded-lg"
            >
              <Phone size={16} />
              Call {BRAND.phone.primary}
            </a>
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.booking)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#C9A84C] text-[#0A1628] font-bold py-3 rounded-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
