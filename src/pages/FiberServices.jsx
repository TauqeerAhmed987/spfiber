import PageTransition from '../components/layout/PageTransition'
import CallToAction from '../components/sections/CallToAction'
import PageBanner from '../components/sections/PageBanner'
import Pricing from '../components/sections/Pricing'
import { fiberPlans } from '../data/site'

export default function FiberServices() {
  return (
    <PageTransition>
      <PageBanner title="Fiber Optics Services" breadcrumb="Fiber Optics Services" />
      <Pricing
        tag="Our Services"
        title="Spalding Fiber Internet Plans"
        plans={fiberPlans}
        bg="bg-white"
      />
      <CallToAction />
    </PageTransition>
  )
}
