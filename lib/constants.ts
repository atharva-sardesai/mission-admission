export const BRAND = {
  name: 'Mission Admission',
  tagline: 'Right Guidance at the Right Time Changes Everything.',
  taglineMarathi: 'योग्य मार्गदर्शन, योग्य वेळी — सर्वकाही बदलतं.',
  founded: 'Pune, Maharashtra',
  address: 'Rupali Apartment, Phase-1, Shop No.5, S.No.9/1/6, Near Sunshine Park, Balewadi, Pune — 411045',
  phone: {
    primary: '+91 98222 81188',
    primaryRaw: '919822281188',
    secondary: '+91 79726 70346',
    secondaryRaw: '917972670346',
  },
  email: 'info@missionadmission.info',
  website: 'www.missionadmission.info',
  hours: 'Monday to Saturday, 9 AM to 8 PM',
  social: {
    instagram: 'https://www.instagram.com/mission_admission_21',
    telegram: 'https://t.me/Mission_admission',
    youtube: 'https://www.youtube.com/@missionadmission4296',
    whatsapp: 'https://wa.me/919822281188',
  },
  googleForm: 'https://forms.gle/6yQJoXXESvS7Sa1N8',
}

export const WHATSAPP_MESSAGES = {
  general: `Hi Mission Admission, I need help with admission counselling`,
  booking: `Hi Mission Admission, I want to book a free 15-minute consultation`,
  jee: `Hi Mission Admission, I need counselling for JEE Main/Advanced admission`,
  mhtcet: `Hi Mission Admission, I need help with MHT-CET and CAP round counselling`,
  neet: `Hi Mission Admission, I need counselling for NEET UG and medical admission`,
  mba: `Hi Mission Admission, I need help with MBA admission counselling`,
  nri: `Hi Mission Admission, I need guidance on NRI quota admissions`,
  basic: `Hi Mission Admission, I'm interested in the Basic Counselling Package`,
  complete: `Hi Mission Admission, I'm interested in the Complete Admission Support Package`,
  premium: `Hi Mission Admission, I'm interested in the Premium Counselling Package`,
}

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${BRAND.phone.primaryRaw}?text=${encodeURIComponent(message)}`

export const STATS = [
  { value: 500, suffix: '+', label: 'Students Guided' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Partner Colleges' },
  { value: 98, suffix: '%', label: 'Success Rate' },
]

export const COLORS = {
  navy: '#0A1628',
  navyLight: '#112240',
  gold: '#C9A84C',
  goldLight: '#E0BF6F',
  orange: '#FF6B00',
  white: '#FFFFFF',
  bluegrey: '#E8F0FF',
  green: '#22C55E',
}

export const COLLEGE_LOGOS = [
  { name: 'COEP Pune', short: 'COEP' },
  { name: 'VJTI Mumbai', short: 'VJTI' },
  { name: 'PICT Pune', short: 'PICT' },
  { name: 'Cummins College', short: 'Cummins' },
  { name: 'NIT Surathkal', short: 'NITK' },
  { name: 'MANIT Bhopal', short: 'MANIT' },
  { name: 'MIT Pune', short: 'MIT' },
  { name: 'PCCOE Pune', short: 'PCCOE' },
  { name: 'VIT Vellore', short: 'VIT' },
  { name: 'BITS Pilani', short: 'BITS' },
  { name: 'IIT Bombay', short: 'IIT-B' },
  { name: 'IIT Delhi', short: 'IIT-D' },
]
