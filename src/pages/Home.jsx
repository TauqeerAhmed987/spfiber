import PageTransition from '../components/layout/PageTransition'
import CallToAction from '../components/sections/CallToAction'
import HeroSlider from '../components/sections/HeroSlider'
import HomeAbout from '../components/sections/HomeAbout'
import Pricing from '../components/sections/Pricing'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { fiberPlans, homeWhyChooseUs } from '../data/site'

export default function Home() {
  return (
    <PageTransition>
      <HeroSlider />
      <HomeAbout />
      <Services />
      <Pricing tag="Packages" title="Spalding Fiber Internet Plans" plans={fiberPlans} />
      <WhyChooseUs
        tag="Why Choose Us"
        title="Delivering High-Speed Internet Solutions"
        desc="Spalding Fiber stands apart by combining advanced technology with a customer-first approach. With nearly two decades of industry experience, we deliver reliable, high-speed internet designed for real people, real businesses, and real communities."
        items={homeWhyChooseUs}
      />
      <CallToAction />
      <Testimonials />
    </PageTransition>
  )
}
