import { CheckIcon, MissionIcon, VisionIcon } from '../components/icons'
import PageTransition from '../components/layout/PageTransition'
import CallToAction from '../components/sections/CallToAction'
import PageBanner from '../components/sections/PageBanner'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { aboutIntro, aboutWhyChooseUs, missionVision } from '../data/site'
import { fadeLeft, fadeRight } from '../utils/animations'

const missionIcons = [MissionIcon, VisionIcon]

export default function About() {
  return (
    <PageTransition>
      <PageBanner title="About Us" breadcrumb="About Us" />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal variants={fadeLeft} className="relative mx-auto max-w-[480px] w-full">
            <span className="absolute -top-8 -left-8 w-9 h-9 rounded-full border border-primary/40 pointer-events-none hidden sm:block" />
            <span className="absolute -top-2 -left-2 w-1.5 h-1.5 rounded-full bg-primary pointer-events-none hidden sm:block" />
            <img
              src={aboutIntro.image}
              alt="Spalding Fiber about us"
              className="relative w-full h-auto object-contain"
            />
          </Reveal>

          <Reveal variants={fadeRight}>
            <span className="text-primary font-semibold uppercase tracking-[2px] text-sm mb-3 block underline underline-offset-4 decoration-2">
              {aboutIntro.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-heading font-semibold text-heading leading-tight mb-5">
              {aboutIntro.title}
            </h2>
            <p className="text-body leading-relaxed mb-8">{aboutIntro.desc}</p>
            <ul className="space-y-3 mb-8">
              {aboutIntro.checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-heading font-medium">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CheckIcon size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/contact-us" icon={false}>
              Get Started
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F7F7FA]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          {missionVision.map((item, i) => {
            const Icon = missionIcons[i] || MissionIcon
            return (
              <Reveal
                key={item.title}
                index={i}
                className="bg-white rounded-2xl border border-black/5 shadow-card hover:shadow-card-hover transition-shadow duration-300 p-10"
              >
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-3xl mb-6">
                  <Icon />
                </span>
                <h4 className="font-heading font-semibold text-2xl text-heading mb-3">
                  {item.title}
                </h4>
                <p className="text-body leading-relaxed">{item.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <WhyChooseUs
        title="Reliable Internet Solutions You Can Trust"
        items={aboutWhyChooseUs}
        bg="bg-[#F7F7FA]"
      />
      <CallToAction />
    </PageTransition>
  )
}
