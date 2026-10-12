import { HomeIcon } from '../components/icons'
import PageTransition from '../components/layout/PageTransition'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <PageTransition className="min-h-[70vh] flex items-center justify-center bg-[#F7F7FA]">
      <div className="text-center px-4">
        <span className="text-[120px] sm:text-[160px] font-heading font-bold text-primary/15 leading-none">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-heading font-semibold text-heading -mt-6 mb-4">
          Page Not Found
        </h1>
        <p className="text-body max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on track.
        </p>
        <Button to="/" icon={false}>
          <span className="inline-flex items-center gap-2">
            <HomeIcon /> Back to Home
          </span>
        </Button>
      </div>
    </PageTransition>
  )
}
