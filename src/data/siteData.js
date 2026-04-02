// ==============================
//   iDentist Clinic — Site Data
//   Location: Siliguri, WB
// ==============================

export const CLINIC = {
  name: "iDentist Dental Clinic",
  tagline: "Siliguri's Most Advanced Dental Care",
  address: "Sevoke Road, Siliguri, West Bengal – 734001",
  addressNear: "Near Siliguri Junction Railway Station",
  phone: "+91 353 250 0100",
  phone2: "+91 97330 12345",
  email: "hello@identist.in",
  whatsapp: "919733012345",
  mapLink: "https://maps.google.com/?q=Sevoke+Road+Siliguri+West+Bengal",
  founded: "2011",
  city: "Siliguri",
};

export const services = [
  {
    id: 1,
    icon: "🦷",
    title: "General Dentistry",
    desc: "Routine check-ups, X-rays, fillings, scaling and polishing — preventive care that keeps your teeth for life.",
    tag: "Most Popular",
  },
  {
    id: 2,
    icon: "✨",
    title: "Teeth Whitening",
    desc: "Professional laser whitening that brightens your smile up to 10 shades in a single 60-minute session.",
    tag: null,
  },
  {
    id: 3,
    icon: "🔧",
    title: "Orthodontics",
    desc: "Metal braces, ceramic braces and premium clear aligners to perfectly straighten your teeth.",
    tag: null,
  },
  {
    id: 4,
    icon: "💎",
    title: "Dental Implants",
    desc: "Titanium implants that replace missing teeth permanently — looking, feeling and functioning like natural teeth.",
    tag: "Advanced",
  },
  {
    id: 5,
    icon: "🎨",
    title: "Cosmetic Dentistry",
    desc: "Porcelain veneers, smile design, bonding and complete aesthetic makeovers tailored to your face.",
    tag: null,
  },
  {
    id: 6,
    icon: "👶",
    title: "Paediatric Dentistry",
    desc: "Fun, fear-free dental care for children from toddlers to teens with our gentle kid-friendly team.",
    tag: null,
  },
  {
    id: 7,
    icon: "🛡️",
    title: "Root Canal Therapy",
    desc: "Painless single-visit RCT using rotary endodontics — save your natural tooth without discomfort.",
    tag: null,
  },
  {
    id: 8,
    icon: "🚨",
    title: "Emergency Dental",
    desc: "Same-day emergency appointments for toothaches, cracked teeth, lost fillings and dental trauma.",
    tag: "24hr Helpline",
  },
];

export const team = [
  {
    id: 1,
    name: "Dr. Sanjana Roy",
    role: "Founder & Lead Dentist",
    initials: "SR",
    color: "#2196f3",
    exp: "14 Years",
    spec: "Cosmetic & Implant Dentistry",
    // Replace with real image: imageSrc: "/assets/images/dr-sanjana-roy.jpg"
    imageSrc: null,
  },
  {
    id: 2,
    name: "Dr. Arindham Ghosh",
    role: "Senior Orthodontist",
    initials: "AG",
    color: "#f5b800",
    exp: "10 Years",
    spec: "Clear Aligners & Braces",
    imageSrc: null,
  },
  {
    id: 3,
    name: "Dr. Priti Sharma",
    role: "Paediatric Dentist",
    initials: "PS",
    color: "#4caf50",
    exp: "8 Years",
    spec: "Children's Dentistry",
    imageSrc: null,
  },
  {
    id: 4,
    name: "Dr. Rahul Basu",
    role: "Endodontist",
    initials: "RB",
    color: "#ab47bc",
    exp: "9 Years",
    spec: "Root Canal & Oral Surgery",
    imageSrc: null,
  },
];

export const reviews = [
  {
    id: 1,
    name: "Riya Chatterjee",
    initials: "RC",
    color: "#2196f3",
    rating: 5,
    date: "March 2025",
    source: "Google",
    text: "Absolutely the best dental clinic in Siliguri! I had severe dental anxiety and Dr. Sanjana was incredibly patient and gentle. My implants look completely natural. The clinic is spotlessly clean and modern.",
  },
  {
    id: 2,
    name: "Bikash Pradhan",
    initials: "BP",
    color: "#f5b800",
    rating: 5,
    date: "February 2025",
    source: "Google",
    text: "Got my clear aligners done here. The whole process was explained clearly, the team is professional and the results speak for themselves. My smile is completely transformed. Highly recommend!",
  },
  {
    id: 3,
    name: "Sunita Agarwal",
    initials: "SA",
    color: "#4caf50",
    rating: 5,
    date: "January 2025",
    source: "Practo",
    text: "Brought my 7-year-old here who is terrified of dentists. Dr. Priti was magical with him — he came out smiling and is actually excited for his next visit. That says everything about this place.",
  },
  {
    id: 4,
    name: "Debabrata Sen",
    initials: "DS",
    color: "#ab47bc",
    rating: 5,
    date: "March 2025",
    source: "Practo",
    text: "Had a root canal here — painless! Done in a single visit using modern rotary equipment. No swelling, no post-procedure pain. The staff are warm and the pricing is transparent with no hidden fees.",
  },
];

export const stats = [
  { value: "13+", label: "Years of Excellence" },
  { value: "10,000+", label: "Happy Patients" },
  { value: "14", label: "Specialist Dentists" },
  { value: "99%", label: "Satisfaction Rate" },
];

export const workingHours = [
  { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM", open: true },
  { day: "Sunday", time: "10:00 AM – 4:00 PM", open: true },
  { day: "Public Holidays", time: "Emergency Only", open: false },
];

export const faqs = [
  { q: "Do I need to book in advance?", a: "We recommend booking in advance, but walk-ins are welcome based on availability. Call us or use the form to guarantee your preferred slot." },
  { q: "Is parking available?", a: "Yes, free parking is available in our dedicated lot on Sevoke Road, directly adjacent to the clinic." },
  { q: "Do you offer EMI / payment plans?", a: "Yes — we offer 0% EMI through major banks and NBFCs for treatments above ₹5,000. Ask our front desk for details." },
  { q: "What insurance do you accept?", a: "We accept most major cashless health insurance plans. Please call ahead to confirm your specific policy." },
  { q: "How do I prepare for my first visit?", a: "Arrive 10 minutes early, bring a photo ID and any previous dental records if available. We'll take care of the rest." },
  { q: "Are your instruments sterilised?", a: "Absolutely. We use hospital-grade autoclave sterilisation and single-use consumables for every patient, every time." },
];

export const galleryImages = [
  // Replace null with actual image path, e.g. "/assets/images/clinic-reception.jpg"
  { id: 1, label: "Reception & Waiting Area",  src: "/images/identreseption.webp" },
  { id: 2, label: "Treatment Room 1",           src: "/images/idental room.jpg" },
  { id: 3, label: "Digital X-Ray Suite",        src: "/images/identalfront.webp" },
  { id: 4, label: "Sterilisation Room",          src: "/images/doctormini.png" },
  { id: 5, label: "Treatment Room 2",           src: "/images/idental before after.jpg" },
  { id: 6, label: "Children's Corner",           src: "/images/opration.png" },
];
