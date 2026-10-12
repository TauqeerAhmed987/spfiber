import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { contactServices } from '../../data/site'
import {
  CheckCircleIcon,
  ErrorIcon,
  MailIcon,
  MessageIcon,
  SendIcon,
  ServiceIcon,
  UserIcon,
} from '../icons'

const initialForm = { firstName: '', lastName: '', email: '', service: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.firstName.trim()) errors.firstName = 'First name is required'
  if (!form.lastName.trim()) errors.lastName = 'Last name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Enter a valid email address'
  if (!form.service) errors.service = 'Please select a service'
  if (!form.message.trim()) errors.message = 'Please enter a message'
  else if (form.message.trim().length < 10)
    errors.message = 'Message should be at least 10 characters'
  return errors
}

const inputBase =
  'w-full bg-white border rounded-md py-3.5 pl-11 pr-4 text-sm text-heading placeholder:text-body/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all'
const iconClass = 'absolute left-4 top-1/2 -translate-y-1/2 text-primary'

function FieldError({ message }) {
  return message ? <p className="text-xs text-red-500 mt-1.5">{message}</p> : null
}

function Alert({ tone, icon: Icon, children }) {
  const tones = {
    success: 'bg-primary/10 text-primary',
    error: 'bg-red-50 text-red-600',
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`mb-6 flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium ${tones[tone]}`}
    >
      <Icon className="text-lg shrink-0" />
      {children}
    </motion.div>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm(initialForm)
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = (name) =>
    `${inputBase} ${errors[name] ? 'border-red-400' : 'border-black/10'}`

  return (
    <div className="bg-[#F4F4F7] rounded-2xl p-6 sm:p-10 relative">
      <h3 className="font-heading font-semibold text-2xl text-heading mb-1">
        Get In Touch With Us
      </h3>
      <p className="text-sm text-body mb-8">
        Your email address will not be published. All fields are mandatory.
      </p>

      <AnimatePresence>
        {status === 'success' && (
          <Alert tone="success" icon={CheckCircleIcon}>
            Your message has been sent successfully. We&apos;ll get back to you soon.
          </Alert>
        )}
        {status === 'error' && (
          <Alert tone="error" icon={ErrorIcon}>
            Something went wrong sending your message. Please try again, or email us
            directly.
          </Alert>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <div className="relative">
              <UserIcon className={iconClass} />
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={form.firstName}
                onChange={handleChange}
                className={fieldClass('firstName')}
              />
            </div>
            <FieldError message={errors.firstName} />
          </div>
          <div>
            <div className="relative">
              <UserIcon className={iconClass} />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={form.lastName}
                onChange={handleChange}
                className={fieldClass('lastName')}
              />
            </div>
            <FieldError message={errors.lastName} />
          </div>
        </div>

        <div>
          <div className="relative">
            <MailIcon className={iconClass} />
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={form.email}
              onChange={handleChange}
              className={fieldClass('email')}
            />
          </div>
          <FieldError message={errors.email} />
        </div>

        <div>
          <div className="relative">
            <ServiceIcon className={iconClass} />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`${fieldClass('service')} appearance-none`}
            >
              <option value="">Select Services*</option>
              {contactServices.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <FieldError message={errors.service} />
        </div>

        <div>
          <div className="relative">
            <MessageIcon className="absolute left-4 top-4 text-primary" />
            <textarea
              name="message"
              placeholder="Enter Your Message Here*"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`${fieldClass('message')} pt-3.5 resize-none`}
            />
          </div>
          <FieldError message={errors.message} />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-md hover:bg-dark transition-all duration-300 hover:-translate-y-1 shadow-button disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          <SendIcon className="rotate-45" />
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
