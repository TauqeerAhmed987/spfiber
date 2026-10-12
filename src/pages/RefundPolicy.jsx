import PageTransition from '../components/layout/PageTransition'
import PageBanner from '../components/sections/PageBanner'
import PolicyContent from '../components/sections/PolicyContent'
import { refundPolicy } from '../data/policies'

export default function RefundPolicy() {
  return (
    <PageTransition>
      <PageBanner title="Refund Policy" breadcrumb="Refund Policy" />
      <PolicyContent sections={refundPolicy} />
    </PageTransition>
  )
}
