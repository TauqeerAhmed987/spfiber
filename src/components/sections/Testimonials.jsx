import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonials } from '../../data/site'
import { StarIcon } from '../icons'
import SectionTitle from '../ui/SectionTitle'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F7FA]">
      <div className="container mx-auto px-4">
        <SectionTitle tag="Testimonials" title="Happy Customers" className="mb-14" />
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="testimonial-swiper pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="bg-white rounded-2xl shadow-card border border-black/5 p-8 h-full flex flex-col">
                <div className="flex items-center gap-1 text-primary mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <StarIcon key={i} size={16} />
                  ))}
                </div>
                <p className="text-sm text-body leading-relaxed flex-1 mb-6">
                  “{item.quote}”
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover bg-primary/10"
                  />
                  <div>
                    <h6 className="font-heading font-semibold text-heading text-sm">
                      {item.name}
                    </h6>
                    <span className="text-xs text-body">{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
