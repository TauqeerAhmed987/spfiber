import { ctaContent } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function CallToAction() {
  return (
    <section className="relative bg-dark py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#075BE6_0%,transparent_45%)]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_85%_80%,#075BE6_0%,transparent_40%)]" />
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />

      <div className="container relative mx-auto px-4 text-center">
        <Reveal>
          <span className="inline-block text-primary font-semibold uppercase tracking-[2px] text-sm mb-3 underline underline-offset-4 decoration-2">
            {ctaContent.tag}
          </span>
          <h2 className="text-3xl md:text-[42px] font-heading font-semibold text-white leading-tight mb-6">
            {ctaContent.title}
          </h2>
          <p className="text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            {ctaContent.desc}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/fiber-optics-services" variant="primary">
              View Plans
            </Button>
            <Button
              to="/contact-us"
              variant="outline"
              icon={false}
              className="!text-white !border-white/30 hover:!bg-white hover:!text-dark"
            >
              Talk to Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
