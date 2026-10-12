import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {
  contactInfo,
  legalLinks,
  marqueeItems,
  quickLinks,
  socialLinks,
} from '../../data/site'
import { ArrowUpIcon, MailIcon, MapPinIcon, PhoneIcon } from '../icons'
import Reveal from '../ui/Reveal'
import SocialIcon from '../ui/SocialIcon'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="bg-dark text-white/70 relative">
      <div className="border-b border-white/10 bg-dark py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-6 text-sm font-heading font-semibold uppercase tracking-[2px] text-white/50 flex items-center gap-6"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <Reveal index={0}>
          <Link to="/" className="flex items-center mb-4 w-fit">
            <img src={logo} alt="Spalding Fiber" className="h-20 w-auto" />
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">
            We are proud to bring our expertise and commitment to excellence to
            Central Jamaica, offering a comprehensive range of high-speed
            internet solutions tailored to meet the diverse needs of our
            customers.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors duration-300"
              >
                <SocialIcon name={social.icon} size={14} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal index={1}>
          <h5 className="text-white font-heading font-semibold text-lg mb-5">
            Quick Links
          </h5>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal index={2}>
          <h5 className="text-white font-heading font-semibold text-lg mb-5">
            Contact Us
          </h5>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPinIcon className="text-primary mt-0.5 shrink-0" />
              {contactInfo.address}
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="text-primary shrink-0" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-primary transition-colors"
              >
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="text-primary shrink-0" />
              <a
                href={`tel:${contactInfo.phoneHref}`}
                className="hover:text-primary transition-colors"
              >
                {contactInfo.phone}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>

      <div className="border-t border-white/10 bg-primary/95">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white">
          <p>Copyright© 2026 SPALDING FIBER. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="hover:text-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white text-dark border-2 border-primary flex items-center justify-center shadow-lg transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUpIcon />
      </button>
      <a
        href={`tel:${contactInfo.phoneHref}`}
        aria-label="Call Spalding Fiber"
        className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg animate-float"
      >
        <PhoneIcon size={20} />
      </a>
    </footer>
  )
}
