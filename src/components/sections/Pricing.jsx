import { motion } from 'framer-motion'
import { fadeUp, inViewProps } from '../../utils/animations'
import { CheckIcon } from '../icons'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'

function PlanCard({ plan, index = 0 }) {
  const { name, price, desc, features, buyUrl, featured } = plan
  const isExternal = buyUrl?.startsWith('http')

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      {...inViewProps}
      whileHover={{ y: -10 }}
      className={`relative flex flex-col rounded-2xl p-8 bg-white transition-shadow duration-300 border ${featured ? 'border-primary shadow-card-hover' : 'border-black/5 shadow-card hover:shadow-card-hover'}`}
    >
      {featured && (
        <span className="absolute -top-3 right-6 bg-primary text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
          Popular
        </span>
      )}
      <span className="text-xs font-bold uppercase tracking-widest text-body">{name}</span>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-3xl font-heading font-bold text-heading">{price}</span>
        <span className="text-sm font-normal text-body">/month</span>
      </div>
      {desc && <p className="text-sm mt-4 text-body leading-relaxed">{desc}</p>}
      <ul className="mt-5 space-y-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-heading/80">
            <CheckIcon className="text-primary mt-0.5 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      {isExternal ? (
        <Button
          href={buyUrl}
          icon={false}
          variant={featured ? 'primary' : 'dark'}
          className="w-full mt-6 !py-3.5"
        >
          Buy Now
        </Button>
      ) : (
        <Button
          to={buyUrl || '/contact-us'}
          icon={false}
          variant={featured ? 'primary' : 'dark'}
          className="w-full mt-6 !py-3.5"
        >
          View Plan
        </Button>
      )}
    </motion.div>
  )
}

export default function Pricing({ tag = 'Packages', title, plans, bg = 'bg-[#F7F7FA]' }) {
  return (
    <section className={`py-20 md:py-28 ${bg}`}>
      <div className="container mx-auto px-4">
        <SectionTitle tag={tag} title={title} className="mb-14" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name + i} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
