import { homeAbout } from '../../data/site'
import { fadeLeft, fadeRight } from '../../utils/animations'
import { QualityIcon, ShieldIcon } from '../icons'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

const featureIcons = [QualityIcon, ShieldIcon]

export default function HomeAbout() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F7FA] overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        <Reveal variants={fadeLeft} className="relative mx-auto max-w-[480px] w-full">
          <span className="absolute -top-8 -left-8 w-9 h-9 rounded-full border border-primary/40 pointer-events-none hidden sm:block" />
          <span className="absolute -top-2 -left-2 w-1.5 h-1.5 rounded-full bg-primary pointer-events-none hidden sm:block" />
          <img
            src={homeAbout.image}
            alt="Spalding Fiber customer"
            className="relative w-full h-auto object-contain"
          />
        </Reveal>

        <Reveal variants={fadeRight}>
          <span className="text-primary font-semibold uppercase tracking-[2px] text-sm mb-3 block underline underline-offset-4 decoration-2">
            {homeAbout.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-heading font-semibold text-heading leading-tight mb-5">
            {homeAbout.title}
          </h2>
          <p className="text-body leading-relaxed mb-8 max-w-lg">{homeAbout.desc}</p>
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {homeAbout.features.map((feature, i) => {
              const Icon = featureIcons[i] || QualityIcon
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary text-xl mb-4">
                    <Icon />
                  </span>
                  <h6 className="font-heading font-semibold text-heading mb-1.5">
                    {feature.title}
                  </h6>
                  <p className="text-sm text-body leading-relaxed">{feature.desc}</p>
                </div>
              )
            })}
          </div>
          <Button to="/contact-us" icon={false}>
            Get Started
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
