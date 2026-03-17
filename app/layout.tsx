import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import MobileCtaBar from '@/components/layout/MobileCtaBar'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.missionadmission.info'),
  title: {
    default: 'Mission Admission — Pune\'s Trusted Engineering, Medical & MBA Counselling',
    template: '%s | Mission Admission Pune',
  },
  description:
    'Expert admission counselling in Pune for JEE, MHT-CET, NEET, BITSAT & MBA. Get personalized CAP round guidance, college selection, and end-to-end support from Mission Admission — 500+ students guided, 15+ years experience.',
  keywords: [
    'admission counselling Pune',
    'MHT CET counselling',
    'JEE counselling Pune',
    'NEET counselling Maharashtra',
    'engineering admission guidance Pune',
    'CAP round counselling',
    'best admission consultant Pune',
    'college selection guidance Maharashtra',
    'MHT CET CAP round',
    'JEE college selection',
    'engineering college Pune',
    'Mission Admission Pune',
  ],
  authors: [{ name: 'Mission Admission', url: 'https://www.missionadmission.info' }],
  creator: 'Mission Admission',
  publisher: 'Mission Admission',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.missionadmission.info',
    siteName: 'Mission Admission',
    title: "Pune's Most Trusted Admission Counselling — Mission Admission",
    description:
      'Expert counselling for JEE, MHT-CET, NEET, and MBA admissions. 500+ students guided to top colleges. Based in Balewadi, Pune.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mission Admission — Pune Admission Counselling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mission Admission — Pune's Trusted Counselling Platform",
    description: 'JEE, MHT-CET, NEET & MBA counselling. 500+ students guided.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.missionadmission.info/#organization',
      name: 'Mission Admission',
      url: 'https://www.missionadmission.info',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.missionadmission.info/logo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-98222-81188',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
      sameAs: [
        'https://www.instagram.com/mission_admission_21',
        'https://t.me/Mission_admission',
        'https://www.youtube.com/@missionadmission',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.missionadmission.info/#localbusiness',
      name: 'Mission Admission',
      image: 'https://www.missionadmission.info/og-image.jpg',
      description:
        'Pune-based admission counselling platform specializing in engineering, medical, and MBA admissions guidance for JEE, MHT-CET, NEET and CAP rounds.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rupali Apartment, Phase-1, Shop No.5, S.No.9/1/6, Near Sunshine Park, Balewadi',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411045',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 18.574,
        longitude: 73.769,
      },
      telephone: '+91-98222-81188',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
      priceRange: '₹₹',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0A1628]">
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileCtaBar />
      </body>
    </html>
  )
}
