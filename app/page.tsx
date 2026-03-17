import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ExamsGrid from '@/components/home/ExamsGrid'
import ServicesGrid from '@/components/home/ServicesGrid'
import SuccessStories from '@/components/home/SuccessStories'
import PricingCards from '@/components/home/PricingCards'
import ToppersTalk from '@/components/home/ToppersTalk'
import ExamDates from '@/components/home/ExamDates'
import FAQ from '@/components/home/FAQ'
import LeadForm from '@/components/home/LeadForm'

export const metadata: Metadata = {
  title: "Pune's Most Trusted Admission Counselling for JEE, MHT-CET, NEET & MBA",
  description:
    "Mission Admission — Pune's most trusted counselling platform for engineering, medical & MBA admissions. Expert guidance for JEE, MHT-CET, NEET, CAP round & NRI quota. 500+ students guided. Book a free session today.",
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What exams does Mission Admission provide counselling for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide expert counselling for JEE Main & Advanced, MHT-CET, NEET UG, BITSAT, VITEEE, COMED-K, and MBA entrance exams including CAT and Maharashtra MBA CET.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Mission Admission counselling cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Packages range from ₹5,000 for basic counselling to ₹25,000 for our Premium Package. We also offer a free 15-minute consultation to understand your needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide online counselling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide both in-person sessions at our Balewadi, Pune office and online video call sessions for students outside Pune.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <ExamsGrid />
      <ServicesGrid />
      <SuccessStories />
      <PricingCards />
      <ToppersTalk />
      <ExamDates />
      <FAQ />
      <LeadForm />
    </>
  )
}
