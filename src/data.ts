import { Service, Testimonial, WhyUsItem } from './types';

export const servicesData: Service[] = [
  {
    id: 'roof-repair',
    title: 'Roof Repair',
    description: 'Targeted fixes for leaks, broken shingles, and structural wear. We catch minor issues before they become costly major disasters.',
    bullets: [
      'Leak detection & thermal imagery inspection',
      'Individual shingle or tile replacements',
      'Flashing and chimney boot repairs',
      'Immediate wood rot correction & re-decking'
    ],
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'roof-replacement',
    title: 'Roof Replacement',
    description: 'Providing premium full-roof tear-offs and replacements designed to shield your family and withstand Texas winds for decades.',
    bullets: [
      'Highest quality asphalt shingles & metals',
      'Complete strip down to underlying decking',
      'Advanced synthetic dry-in underlayments',
      'Full brand new ventilation ecosystem setup'
    ],
    iconName: 'Hammer',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'roof-installation',
    title: 'Roof Installation',
    description: 'Precision roofing for custom-built homes and new additions. We work hand-in-hand with builders to ensure absolute lifetime integrity.',
    bullets: [
      'Custom architectural drawings support',
      'Engineering-backed weight calculations',
      'State-of-the-art moisture protection layers',
      'Seamless architectural shingles or standing seam metal'
    ],
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'roof-inspection',
    title: 'Roof Inspection',
    description: 'Thorough, multi-point visual and structural assessments. Get detailed documentation to check the physical health of your roofing system.',
    bullets: [
      '100% Free initial safety inspections',
      'In-depth shingle adhesion and wear tracking',
      'Real-time drone photography of hard-to-reach areas',
      'Full insurance-ready damage reporting check'
    ],
    iconName: 'ClipboardCheck',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'storm-damage',
    title: 'Storm Damage Restoration',
    description: 'North Texas hail and high winds are notorious. We are hail experts specializing in walking homeowners through insurance claims successfully.',
    bullets: [
      'Immediate tarping to halt active leaks',
      'Assistance filing documentation with adjusters',
      'Accurate scope of work mapped out upfront',
      'Guaranteed replacement match with top local code standards'
    ],
    iconName: 'CloudLightning',
    image: 'https://images.unsplash.com/photo-1527030280862-64139fbe04ca?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gutter-services',
    title: 'Gutter Services',
    description: 'Professional seamless aluminum gutter installations and shield guards to safely divert Texas downpours away from your foundation.',
    bullets: [
      'Custom 5" & 6" seamless aluminum gutters',
      'Baked-on enamel finishes (multiple colors)',
      'Heavy-duty leaf guards & premium filters',
      'Downspout placement for optimal foundation safety'
    ],
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'commercial-roofing',
    title: 'Commercial Roofing',
    description: 'Heavy durable roofing solutions for Mansfield and DFW commercial properties. Low-slope, flat roof, and TPO single-ply systems customizable for you.',
    bullets: [
      'TPO single-ply and modified bitumen systems',
      'Specialty commercial cool-roof reflective coatings',
      'Minimal disruption to standard business hours',
      'Long-term multi-year commercial preventative maintenance plans'
    ],
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'emergency-roofing',
    title: 'Emergency Service & Tarping',
    description: 'Active major leak in the middle of the night? Our rapid storm response crew is on standby to protect your home from sudden devastation.',
    bullets: [
      'Available 24 hours a day, 7 days a week',
      'Heavy-duty commercial structural emergency tarping',
      'Immediate safety evaluations of weakened structures',
      'Storm response unit dispatched directly to DFW homes'
    ],
    iconName: 'AlertTriangle',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Robert H.',
    location: 'Mansfield, TX',
    rating: 5,
    date: 'April 2026',
    text: 'Jireh Roofing was an absolute answer to prayer after the spring storms. Their team came out the very next morning for a free inspection. They identified severe hail damage I did not know was there and walked me through explaining it to my insurance. Honest, hard-working, and family-oriented!',
    verified: true
  },
  {
    id: '2',
    name: 'Martha G.',
    location: 'Arlington, TX',
    rating: 5,
    date: 'March 2026',
    text: 'I highly recommend Jireh Roofing. Being a family business, you can feel their Christian values in every transaction. They replaced my entire roof in just one day, kept the site clean, and did it at an incredibly honest price. Truly live up to their name Jireh (The Lord Will Provide).',
    verified: true
  },
  {
    id: '3',
    name: 'David & Sarah K.',
    location: 'Grand Prairie, TX',
    rating: 5,
    date: 'May 2026',
    text: 'Highly professional experience and top-tier craftsmanship. The dynamic team showed up exactly when promised, replaced our degraded gutters and asphalt roof, and offered easy financing that fits our family budget. Outstanding service all around!',
    verified: true
  },
  {
    id: '4',
    name: 'Brandon L.',
    location: 'Mansfield, TX',
    rating: 5,
    date: 'February 2026',
    text: 'Honesty is hard to find in roofing, but these guys have it. No high-pressure sales pitches. Just a straightforward inspection with drone photos, clean pricing options, and flawless work on our storm-damaged metal alignment. BBB A+ for a reason!',
    verified: true
  }
];

export const whyUsData: WhyUsItem[] = [
  {
    id: 'faith-based',
    title: 'Faith-Based Christian Values',
    description: '"God Will Provide — And So Will We." We run our business in obedience to Bible-based honesty, absolute transparency, and genuine love for our Texas neighbors.',
    iconName: 'Heart'
  },
  {
    id: 'honest-pricing',
    title: 'Honest, No-Nonsense Pricing',
    description: 'We never inflate costs or push unneeded repairs. We provide detailed line-item cost estimates, fully transparent warranties, and solid Mansfield pride.',
    iconName: 'BadgeDollarSign'
  },
  {
    id: 'community-giving',
    title: 'Rooted in DFW Community Giving',
    description: 'We do not just profit from our communities: we invest in them. A set percentage of every single roof replacement goes directly to DFW-area local families in need.',
    iconName: 'Users'
  },
  {
    id: 'dfw-local-experts',
    title: 'DFW Local Structural Experts',
    description: 'Based right here at 419 Hollyberry Dr in Mansfield, we know North Texas soils, severe weather shifts, building guidelines, and local community needs inside-out.',
    iconName: 'MapPin'
  },
  {
    id: 'storm-specialists',
    title: 'Trained Storm Damage Specialists',
    description: 'We carry out high-fidelity drone scans and visual roof stress-testing to secure your home. We know exactly what regional storm adjusters look for in active claims.',
    iconName: 'ShieldCheck'
  }
];
