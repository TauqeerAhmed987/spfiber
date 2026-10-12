import PageTransition from '../components/layout/PageTransition'
import PageBanner from '../components/sections/PageBanner'
import PolicyContent from '../components/sections/PolicyContent'
import { termsConditions } from '../data/policies'

export default function TermsConditions() {
  return (
    <PageTransition>
      <PageBanner title="Terms & Conditions" breadcrumb="Terms & Conditions" />
      <PolicyContent sections={termsConditions} />
    </PageTransition>
  )
}
