'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { buildWhatsAppLink, BRAND } from '@/lib/constants'

const examOptions = ['JEE Main/Advanced', 'MHT-CET', 'NEET', 'BITSAT', 'MBA Entrance', 'NRI Quota', 'Other']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', exam: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hi Mission Admission!\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || 'N/A'}\nExam Interest: ${form.exam || 'N/A'}\nMessage: ${form.message || 'None'}\n\nPlease contact me.`
    setSent(true)
    window.open(buildWhatsAppLink(msg), '_blank')
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0A1628] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Have a question? Want to book a session? We respond within a few hours — usually much
            faster during counselling season.
          </p>
        </div>
      </section>

      <section className="bg-[#E8F0FF] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Send Us a Message</h2>

              {sent ? (
                <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    WhatsApp opened with your details. We&apos;ll respond shortly. You can also
                    call us directly at{' '}
                    <a href={`tel:${BRAND.phone.primary}`} className="text-[#FF6B00] font-semibold">
                      {BRAND.phone.primary}
                    </a>
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-gray-400 text-sm hover:text-gray-600 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-7 shadow-sm space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#0A1628] font-medium text-sm mb-1.5">
                        Your Name <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Student or Parent name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#0A1628] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#0A1628] font-medium text-sm mb-1.5">
                        Phone / WhatsApp <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#0A1628] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#0A1628] font-medium text-sm mb-1.5">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com (optional)"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#0A1628] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A1628] font-medium text-sm mb-1.5">
                      Exam / Service Interested In
                    </label>
                    <select
                      value={form.exam}
                      onChange={(e) => setForm({ ...form, exam: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#0A1628] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none bg-white"
                    >
                      <option value="">Select an exam</option>
                      {examOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#0A1628] font-medium text-sm mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your situation — exams appearing for, current score/percentile, target colleges, any specific concerns..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#0A1628] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-xl text-base transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Send via WhatsApp
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    Your message will open in WhatsApp. We typically respond within 2-4 hours.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Contact Information</h2>

                {/* WhatsApp CTA */}
                <a
                  href={buildWhatsAppLink('Hi Mission Admission, I want to enquire about counselling services')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl p-5 mb-5 transition-colors group"
                >
                  <svg className="w-10 h-10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.6.9-.8 1.1-.1.2-.3.2-.5.1-1.4-.7-2.3-1.2-3.3-2.8-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.6 4.2.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.6-.4z"/>
                    <path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 5.9L.1 23.3l5.6-1.5c1.7.9 3.5 1.4 5.3 1.4 6.6 0 12-5.4 12-12S18.6 0 12 0zm0 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.5.9.9-3.4-.2-.4C2.7 15.5 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8z"/>
                  </svg>
                  <div>
                    <div className="font-bold text-lg">Chat on WhatsApp</div>
                    <div className="text-white/80 text-sm">Fastest response — typically within 2-4 hours</div>
                  </div>
                </a>

                <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#0A1628] text-sm">Office Address</p>
                      <p className="text-gray-600 text-sm mt-0.5">{BRAND.address}</p>
                      <p className="text-gray-500 text-xs mt-1 italic">
                        Near Balewadi High Street, 5 min from Sunshine Park
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#C9A84C] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#0A1628] text-sm">Phone Numbers</p>
                      <a href={`tel:${BRAND.phone.primary}`} className="text-[#FF6B00] text-sm font-medium hover:underline block">
                        {BRAND.phone.primary} (Primary)
                      </a>
                      <a href={`tel:${BRAND.phone.secondary}`} className="text-gray-600 text-sm hover:underline block">
                        {BRAND.phone.secondary}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#C9A84C] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#0A1628] text-sm">Email</p>
                      <a href={`mailto:${BRAND.email}`} className="text-gray-600 text-sm hover:underline">
                        {BRAND.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-[#C9A84C] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#0A1628] text-sm">Office Hours</p>
                      <p className="text-gray-600 text-sm">{BRAND.hours}</p>
                      <p className="text-xs text-[#22C55E] font-medium mt-0.5">
                        WhatsApp support also available on Sundays during exam season
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-sm h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.099534768263!2d73.76861!3d18.574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e5e8c3c7c5%3A0x0!2sBalewadi%2C+Pune!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mission Admission Office Location — Balewadi, Pune"
                />
              </div>

              {/* Directions */}
              <div className="bg-[#0A1628] rounded-xl p-5 text-white text-sm">
                <p className="font-semibold text-[#C9A84C] mb-2">📍 How to Find Us</p>
                <p className="text-gray-300 leading-relaxed">
                  We&apos;re located in Rupali Apartment, Balewadi — approximately 5 minutes from
                  Balewadi High Street and near the Sunshine Park residential complex. Look for Shop
                  No. 5 on the ground floor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
