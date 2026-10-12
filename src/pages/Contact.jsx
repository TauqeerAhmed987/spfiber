import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import PageTransition from '../components/layout/PageTransition'
import PageBanner from '../components/sections/PageBanner'

export default function Contact() {
  return (
    <PageTransition>
      <PageBanner title="Contact Us" breadcrumb="Contact Us" />
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </PageTransition>
  )
}
