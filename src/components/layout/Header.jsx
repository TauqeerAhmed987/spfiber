import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { contactInfo, navLinks, socialLinks } from '../../data/site'
import { MailIcon, MenuIcon, PhoneIcon, UserIcon } from '../icons'
import Button from '../ui/Button'
import SocialIcon from '../ui/SocialIcon'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <div className="hidden lg:block bg-primary text-white text-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <MailIcon /> {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phoneHref}`}
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <PhoneIcon /> {contactInfo.phone}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <span>Follow Us:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white/15 hover:bg-white hover:text-primary transition"
                  >
                    <SocialIcon name={social.icon} size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-[0_5px_25px_rgba(0,0,0,0.08)]' : ''}`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center z-10">
            <img src={logo} alt="Spalding Fiber" className="h-14 sm:h-16 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.path
              return (
                <div key={link.label} className="relative group">
                  <NavLink
                    to={link.path}
                    className={`font-medium py-2 transition-colors relative ${active ? 'text-primary' : 'text-heading hover:text-primary'}`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-primary transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </NavLink>
                </div>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button
                href={contactInfo.loginUrl}
                icon={false}
                variant="primary"
                className="!py-3 !px-6 text-sm"
              >
                <span className="inline-flex items-center gap-1.5">
                  <UserIcon /> Login
                </span>
              </Button>
            </div>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-md bg-dark text-white text-xl"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
