import PageTransition from '../components/layout/PageTransition'
import CallToAction from '../components/sections/CallToAction'
import ImageCardGrid from '../components/sections/ImageCardGrid'
import PageBanner from '../components/sections/PageBanner'
import { businessSolutions, enterpriseConnectivity, industries } from '../data/site'

export default function Business() {
  return (
    <PageTransition>
      <PageBanner title="Business" breadcrumb="Business" />
      <ImageCardGrid
        tag="Spalding Fiber"
        title="Stand Out With Your Business"
        items={businessSolutions}
        gridClassName="md:grid-cols-3"
      />
      <ImageCardGrid
        tag="Spalding Fiber"
        title="Keeping Your Business Connected"
        items={industries}
        bg="bg-[#F7F7FA]"
        gridClassName="sm:grid-cols-2 lg:grid-cols-4"
      />
      <ImageCardGrid
        tag="Spalding Fiber"
        title="Connectivity Built For Every Business Idea"
        items={enterpriseConnectivity}
        gridClassName="md:grid-cols-3"
      />
      <CallToAction />
    </PageTransition>
  )
}
