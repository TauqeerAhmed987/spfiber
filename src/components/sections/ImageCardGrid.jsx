import { motion } from 'framer-motion'
import { fadeUp, inViewProps } from '../../utils/animations'
import SectionTitle from '../ui/SectionTitle'

function ImageCard({ title, desc, image, index = 0 }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      {...inViewProps}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-card border border-black/5 card-hover"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-7">
        <h4 className="font-heading font-semibold text-lg text-heading mb-3">{title}</h4>
        <p className="text-sm text-body leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function ImageCardGrid({ tag, title, items, bg = 'bg-white', gridClassName }) {
  return (
    <section className={`py-20 md:py-28 ${bg}`}>
      <div className="container mx-auto px-4">
        <SectionTitle tag={tag} title={title} className="mb-14" />
        <div className={`grid gap-8 ${gridClassName}`}>
          {items.map((item, i) => (
            <ImageCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
