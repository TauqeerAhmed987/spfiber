import heroFiber from '../assets/images/hero-fiber.webp'
import heroWireless from '../assets/images/hero-wireless.webp'
import heroEsim from '../assets/images/hero-esim.webp'
import aboutHome from '../assets/images/about-home.webp'
import aboutIntroImage from '../assets/images/about-intro.webp'
import smallBusiness from '../assets/images/small-business-solutions.webp'
import enterprise from '../assets/images/enterprise-solutions.webp'
import government from '../assets/images/government-solutions.webp'
import healthcare from '../assets/images/healthcare.webp'
import banking from '../assets/images/banking-finance.webp'
import education from '../assets/images/education.webp'
import hospitality from '../assets/images/hospitality.webp'
import cloudConnect from '../assets/images/cloud-connect.webp'
import azure from '../assets/images/azure-expressroute.webp'
import corporateBroadband from '../assets/images/corporate-broadband.webp'
import avatarMaria from '../assets/images/avatar-maria.webp'
import avatarCarla from '../assets/images/avatar-carla.webp'
import avatarDavid from '../assets/images/avatar-david.webp'

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Fiber Optics Services', path: '/fiber-optics-services' },
  { label: 'Business', path: '/business' },
  { label: 'Contact Us', path: '/contact-us' },
]

export const quickLinks = [
  { label: 'About Us', path: '/about-us' },
  { label: 'Fiber Optics Services', path: '/fiber-optics-services' },
  { label: 'Business', path: '/business' },
  { label: 'Contact Us', path: '/contact-us' },
]

export const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-conditions' },
  { label: 'Refund Policy', path: '/refund-policy' },
]

export const contactInfo = {
  email: 'info@spaldingfiber.co',
  phone: '+1 (689) 374-2500',
  phoneHref: '+16893742500',
  address: '1722 Main Street, Spaldings, Manchester, JA W.I.',
  loginUrl: 'https://billing.spaldingfiber.co/',
}

export const socialLinks = [
  {
    icon: 'facebook',
    url: 'https://www.facebook.com/people/Spalding-Fiber/61564823080662/',
  },
  { icon: 'instagram', url: 'https://www.instagram.com/spaldingfiber.22/' },
]

export const marqueeItems = [
  'Seamless Connectivity',
  'Future Ready',
  'Smart Solutions',
  'Digital Freedom',
  'Secure Network',
  'Fiber Power',
  'Ultra Fast',
  'Stream Effortlessly',
  'Next Generation',
  'Work Anywhere',
  'Lightning Speed',
]

export const heroSlides = [
  {
    title: 'Power Your Every Click',
    desc: 'Fast, reliable, and innovative connectivity solutions built for homes and businesses across Central Jamaica.',
    image: heroFiber,
  },
  {
    title: 'Speed Meets Stability',
    desc: 'Fiber and wireless networks engineered for consistent performance — no drop-offs, no excuses, just dependable speed.',
    image: heroWireless,
  },
  {
    title: 'Speed You Can Trust',
    desc: 'Nearly two decades of experience delivering internet that real people and real businesses can count on every day.',
    image: heroEsim,
  },
]

export const homeAbout = {
  image: aboutHome,
  tag: 'About Us',
  title: 'Empowering Digital Lives Worldwide',
  desc: 'Spalding Fiber is your trusted internet service provider delivering fast, reliable, and innovative connectivity solutions across Central Jamaica. Founded in 2007 in North Carolina and expanded to the UK and Jamaica, we bring global expertise to every home and business we serve. Our network is built for performance, stability, and unmatched speed.',
  features: [
    { title: 'Quality Service', desc: 'Support that cares' },
    { title: 'Secure Network', desc: 'Safe online access' },
  ],
}

export const services = [
  {
    icon: 'signal',
    title: 'Fiber Optics Services',
    desc: 'Superfast, symmetrical fiber broadband for homes, from Fiber 100 up to Fiber 1000.',
    path: '/fiber-optics-services',
    featured: true,
  },
  {
    icon: 'globe',
    title: 'Broadband Internet',
    desc: 'Reliable, high-speed broadband internet designed for everyday browsing, streaming, and remote work.',
    path: '/contact-us',
    featured: false,
  },
  {
    icon: 'support',
    title: 'Business Solutions',
    desc: 'Small business, enterprise, and government-grade connectivity backed by dedicated Spalding Fiber support.',
    path: '/business',
    featured: false,
  },
]

export const homeWhyChooseUs = [
  {
    icon: 'wifi',
    title: 'Powered by Innovation',
    desc: 'We use the latest fiber and wireless technologies from industry leaders like TP-Link, Airspan, and Nokia to deliver cutting-edge connectivity.',
  },
  {
    icon: 'signal',
    title: 'Reliable Service',
    desc: 'Our robust infrastructure ensures minimal downtime and maximum reliability, keeping you connected when it matters most.',
  },
  {
    icon: 'support',
    title: 'Customer Support',
    desc: "With responsive local support and an experienced technical team, we're here to help you every step of the way.",
  },
  {
    icon: 'price-tag',
    title: 'Affordable Plans',
    desc: 'Flexible fiber, wireless, and broadband packages designed to fit real budgets without cutting corners on speed or service.',
  },
]

export const aboutWhyChooseUs = [
  {
    icon: 'signal',
    title: 'Reliable Speed',
    desc: 'Experience fast, consistent internet performance powered by advanced fiber and wireless technology you can always trust.',
  },
  {
    icon: 'globe',
    title: 'Trusted Expertise',
    desc: 'Benefit from years of global experience delivering secure, innovative connectivity solutions for homes and businesses.',
  },
  {
    icon: 'price-tag',
    title: 'Affordable Plans',
    desc: 'Enjoy flexible, budget-friendly internet packages designed to meet your needs without sacrificing quality.',
  },
  {
    icon: 'support',
    title: 'Strong Support',
    desc: 'Get responsive customer service and technical assistance whenever you need reliable help and quick solutions.',
  },
]

export const testimonials = [
  {
    quote:
      'Spalding Fiber has transformed our home internet experience. The connection is fast, stable, and perfect for streaming and remote work. Their customer support is always quick and helpful. Highly recommended!',
    name: 'Maria T.',
    role: 'Residential Customer',
    avatar: avatarMaria,
    rating: 5,
  },
  {
    quote:
      'Our company depends on strong connectivity, and Spalding Fiber delivers exactly that. The speed, uptime, and professional installation exceeded our expectations. We finally have an internet provider we can trust.',
    name: 'Carla S.',
    role: 'Business Owner',
    avatar: avatarCarla,
    rating: 5,
  },
  {
    quote:
      'Switching to Spalding Fiber was the best decision for our family. The internet is incredibly reliable, and any questions we had were handled promptly. Outstanding service from start to finish.',
    name: 'David R.',
    role: 'Home User',
    avatar: avatarDavid,
    rating: 5,
  },
]

export const ctaContent = {
  tag: 'Get Connected Today',
  title: 'Upgrade to Faster, Smarter Internet',
  desc: 'Experience the power of reliable, high-speed connectivity designed for your home or business. Join thousands who trust Spalding Fiber for fiber and broadband solutions built on innovation and unmatched customer support. Make the switch today and stay connected to what matters most.',
}

export const aboutIntro = {
  image: aboutIntroImage,
  tag: 'About Us',
  title: 'Innovating Digital Connectivity',
  desc: 'Spalding Fiber delivers reliable, high-speed internet solutions designed to keep homes, businesses, and government agencies connected. Founded in 2007, we combine innovation, global expertise, and trusted technology partners to ensure seamless connectivity across Central Jamaica.',
  checklist: [
    'High-speed fiber internet',
    'FTTH and broadband solutions',
    '4G LTE and advanced wireless services',
  ],
}

export const missionVision = [
  {
    title: 'Our Mission',
    desc: 'Our mission is to deliver fast, reliable, and affordable internet that keeps homes, businesses, and communities connected through innovative technology.',
  },
  {
    title: 'Our Vision',
    desc: 'Our Vision is to build a future where seamless, high-speed connectivity is accessible to everyone across Central Jamaica.',
  },
]

export const fiberPlans = [
  {
    name: 'Fiber 100',
    price: '$39.95',
    desc: '100 Mbps / 100 Mbps',
    features: [
      'Ideal for 1–3 users',
      'HD Streaming',
      'Remote Work',
      'Unlimited Data',
      'Wi-Fi Included',
    ],
    buyUrl: '/contact-us',
    featured: false,
  },
  {
    name: 'Fiber 250',
    price: '$49.95',
    desc: '250 Mbps / 250 Mbps',
    features: [
      'Multiple Devices',
      'Smart Home Ready',
      'Video Conferencing',
      'Unlimited Data',
    ],
    buyUrl: '/contact-us',
    featured: false,
  },
  {
    name: 'Fiber 500',
    price: '$59.95',
    desc: '500 Mbps / 500 Mbps',
    features: [
      '4K Streaming',
      'Online Gaming',
      'Remote Workers',
      'Unlimited Data',
    ],
    buyUrl: '/contact-us',
    featured: false,
  },
  {
    name: 'Fiber 1 Gig',
    price: '$79.95',
    desc: '1 Gbps / 1 Gbps — Most Popular',
    features: [
      'Large Families',
      'Heavy Streaming',
      'Cloud Applications',
      'Smart Homes',
    ],
    buyUrl: '/contact-us',
    featured: true,
  },
  {
    name: 'Fiber 2 Gig',
    price: '$99.95',
    desc: '2 Gbps / 2 Gbps',
    features: [
      'Content Creators',
      'AI Applications',
      'Connected Homes',
      'Advanced Users',
    ],
    buyUrl: '/contact-us',
    featured: false,
  },
  {
    name: 'Hyperion Fiber 5 Gig',
    price: '$149.95',
    desc: '5 Gbps / 5 Gbps',
    features: [
      'Ultimate Performance',
      'Home Labs',
      'Enterprise-Class Residential',
      'Future-Ready Connectivity',
    ],
    buyUrl: '/contact-us',
    featured: false,
  },
]

export const businessSolutions = [
  {
    title: 'Small Business Solutions',
    desc: "Fuel your growth with reliable, scalable internet solutions designed for today's fast-moving businesses. Spalding Fiber empowers small businesses with high-speed fiber and wireless connectivity that's flexible, cost-effective, and built to support your ambitions.",
    image: smallBusiness,
  },
  {
    title: 'Enterprise Solutions',
    desc: 'Unlock the full potential of your organization with advanced connectivity built for scale and performance. Spalding Fiber delivers enterprise-grade fiber and wireless solutions that streamline operations, boost productivity, and support complex business ecosystems.',
    image: enterprise,
  },
  {
    title: 'Government Solutions',
    desc: 'Deliver public services with confidence through secure, high-performance connectivity. Spalding Fiber partners with government institutions to provide robust fiber and wireless infrastructure that enhances operational efficiency, reliability, and digital transformation.',
    image: government,
  },
]

export const industries = [
  {
    title: 'Healthcare',
    desc: 'Enable seamless patient care with secure, high-speed networks that support digital records, telemedicine, and life-saving technologies without interruption.',
    image: healthcare,
  },
  {
    title: 'Banking & Finance',
    desc: 'Gain a digital edge with ultra-reliable connectivity designed for secure transactions, real-time data access, and compliance-driven financial operations.',
    image: banking,
  },
  {
    title: 'Education',
    desc: 'Transform learning environments with fast, dependable internet that supports e-learning platforms, virtual classrooms, and next-generation educational tools.',
    image: education,
  },
  {
    title: 'Hospitality',
    desc: 'Deliver exceptional guest experiences with powerful, consistent connectivity that meets the demands of modern travelers and smart hospitality systems.',
    image: hospitality,
  },
]

export const enterpriseConnectivity = [
  {
    title: 'Cloud Connect',
    desc: 'Enable secure, seamless access to business applications anytime, anywhere. Our Cloud Connect solutions leverage SD-WAN technology and can be hosted on-site, private cloud, or public cloud environments ensuring optimized performance, enhanced security, and simplified network management for distributed teams.',
    image: cloudConnect,
  },
  {
    title: 'Azure ExpressRoute',
    desc: "Access global cloud services with speed, security, and confidence. Spalding Fiber's Azure ExpressRoute solutions provide private, high-performance connectivity to Microsoft Azure, ensuring low latency, enhanced data protection, and seamless integration with your business applications across regions.",
    image: azure,
  },
  {
    title: 'Corporate Broadband Internet',
    desc: 'Power your operations with reliable, ultra-fast corporate broadband internet. Designed for mission-critical business needs, our enterprise connectivity delivers high availability, consistent speeds, and dedicated support keeping your teams productive and your systems online without interruption.',
    image: corporateBroadband,
  },
]

export const contactServices = [
  'Fiber Optics Services',
  'Business Solutions',
  'Billing Support',
  'General Inquiry',
]
