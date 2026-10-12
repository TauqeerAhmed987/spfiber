import { motion } from 'framer-motion'
import { fadeUp, inViewProps } from '../../utils/animations'
import {
  ArrowUpRightIcon,
  GlobeIcon,
  PriceTagIcon,
  SignalIcon,
  SupportIcon,
  WifiIcon,
} from '../icons'
import SectionTitle from '../ui/SectionTitle'

const featureIcons = {
  wifi: WifiIcon,
  signal: SignalIcon,
  support: SupportIcon,
  'price-tag': PriceTagIcon,
  globe: GlobeIcon,
}

function FeatureCard({ icon, title, desc, highlight, index = 0 }) {
  const Icon = featureIcons[icon] || WifiIcon

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      {...inViewProps}
      whileHover={{ y: -8 }}
      className={`group relative p-7 rounded-xl transition-colors duration-300 ${highlight ? 'bg-primary text-white' : 'bg-white text-heading border border-black/5 shadow-card hover:border-primary/30'}`}
    >
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-5 ${highlight ? 'bg-white/15 text-white' : 'bg-primary/10 text-primary'}`}
      >
        <Icon />
      </div>
      <h4
        className={`font-heading font-semibold text-lg mb-2 ${highlight ? 'text-white' : 'text-heading'}`}
      >
        {title}
      </h4>
      <p className={`text-sm leading-relaxed ${highlight ? 'text-white/80' : 'text-body'}`}>
        {desc}
      </p>
      <ArrowUpRightIcon
        className={`absolute bottom-6 right-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${highlight ? 'text-white' : 'text-primary'}`}
      />
    </motion.div>
  )
}

export default function WhyChooseUs({ tag = 'Why Choose Us', title, desc, items, bg = 'bg-white' }) {
  return (
    <section className={`py-20 md:py-28 ${bg}`}>
      <div className="container mx-auto px-4">
        <SectionTitle tag={tag} title={title} desc={desc} className="mb-14" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <FeatureCard key={item.title} {...item} highlight={i === 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
