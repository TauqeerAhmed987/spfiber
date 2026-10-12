import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import breadcrumbImage from '../../assets/images/breadcrumb.jpg'

export default function PageBanner({ title, breadcrumb, image = breadcrumbImage }) {
  return (
    <section className="relative bg-dark py-24 md:py-32 overflow-hidden">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-dark to-primary/30 ${image ? 'via-dark/80 opacity-95' : 'via-dark'}`}
      />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />

      <div className="container relative mx-auto px-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-heading font-semibold text-white"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-sm font-medium flex items-center gap-2"
        >
          <Link to="/" className="hover:text-primary transition-colors">
            Home Page
          </Link>
          <span>—</span>
          <span className="text-white">{breadcrumb || title}</span>
        </motion.div>
      </div>
    </section>
  )
}
