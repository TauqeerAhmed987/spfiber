import { Link } from 'react-router-dom'
import { services } from '../../data/site'
import { ArrowUpRightIcon, GlobeIcon, SignalIcon, SupportIcon, WifiIcon } from '../icons'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const serviceIcons = {
  signal: SignalIcon,
  wifi: WifiIcon,
  globe: GlobeIcon,
  support: SupportIcon,
}

export default function Services() {
  return (
    <section className="relative py-20 md:py-28 bg-[#FAFAFB] overflow-hidden">
      <div
        className="absolute -top-6 -left-6 w-64 h-64 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
          maskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)',
        }}
      />
      <div className="absolute top-10 left-8 sm:left-16 w-8 h-8 rounded-full border border-primary/40 pointer-events-none" />
      <span className="absolute top-[52px] left-[52px] sm:left-[100px] w-1.5 h-1.5 rounded-full bg-primary pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <SectionTitle
          tag="Our Services"
          title="Everything You Need, In One Place"
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon]
            return (
              <Reveal key={service.title} index={i}>
                <Link
                  to={service.path}
                  className={`group relative block h-full bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${service.featured ? 'border-2 border-primary shadow-card-hover' : 'border border-black/5 shadow-card hover:shadow-card-hover'}`}
                >
                  <Icon className="text-primary mb-6" size={40} strokeWidth={1.5} />
                  <h4 className="font-heading font-semibold text-xl text-heading mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm text-body leading-relaxed mb-4">{service.desc}</p>
                  <ArrowUpRightIcon className="text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
