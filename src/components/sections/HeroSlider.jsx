import { motion } from 'framer-motion'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { heroSlides } from '../../data/site'
import Button from '../ui/Button'

export default function HeroSlider() {
  return (
    <section className="relative bg-[#F4F4F7] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative min-h-[560px] md:min-h-[680px] flex items-center">
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                className="hidden sm:block absolute inset-0 w-full h-full object-cover object-right"
              />
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#F4F4F7] via-[#F4F4F7]/95 sm:via-[#F4F4F7]/80 to-transparent" />
              <div className="container relative mx-auto px-4 py-20 md:py-0">
                <div className="max-w-xl">
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-4xl sm:text-5xl md:text-[56px] font-heading font-semibold text-heading leading-[1.1] mb-6"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-body text-base md:text-lg leading-relaxed mb-9 max-w-lg"
                  >
                    {slide.desc}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-wrap gap-3 mb-10 sm:mb-0"
                  >
                    <Button to="/fiber-optics-services" icon={false} variant="primary">
                      Fiber Plans
                    </Button>
                    <Button to="/contact-us" icon={false} variant="dark">
                      Get Started
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="sm:hidden rounded-xl overflow-hidden shadow-card"
                  >
                    <img
                      src={slide.image}
                      alt=""
                      className="w-full h-44 object-cover object-right"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
