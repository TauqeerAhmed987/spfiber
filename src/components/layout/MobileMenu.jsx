import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { contactInfo, navLinks } from '../../data/site'
import { slideInRight } from '../../utils/animations'
import { CloseIcon, MailIcon, PhoneIcon } from '../icons'

export default function MobileMenu({ onClose }) {
  const { pathname } = useLocation()

  // Keep the page behind the open menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-dark/60 z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
        variants={slideInRight}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
          <img src={logo} alt="Spalding Fiber" className="h-14 w-auto" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center rounded-md bg-dark text-white text-lg"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-4">
          {navLinks.map((link) => (
            <div key={link.label} className="border-b border-black/5 py-1">
              <Link
                to={link.path}
                onClick={onClose}
                className={`block py-3 font-medium ${pathname === link.path ? 'text-primary' : 'text-heading'}`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="px-6 py-5 border-t border-black/5 space-y-3">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 text-sm text-body"
          >
            <MailIcon className="text-primary" /> {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phoneHref}`}
            className="flex items-center gap-2 text-sm text-body"
          >
            <PhoneIcon className="text-primary" /> {contactInfo.phone}
          </a>
          <a
            href={contactInfo.loginUrl}
            className="block text-center bg-primary text-white font-semibold py-3.5 rounded-md mt-2"
          >
            Login
          </a>
        </div>
      </motion.aside>
    </>
  )
}
