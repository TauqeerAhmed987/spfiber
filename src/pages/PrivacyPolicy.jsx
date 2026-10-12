import PageTransition from '../components/layout/PageTransition'
import PageBanner from '../components/sections/PageBanner'
import PolicyContent from '../components/sections/PolicyContent'
import { privacyPolicy } from '../data/policies'

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <PageBanner title="Privacy Policy" breadcrumb="Privacy Policy" />
      <PolicyContent sections={privacyPolicy} />
    </PageTransition>
  )
}
