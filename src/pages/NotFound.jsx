import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import SEO from '../components/seo/SEO'

function NotFound() {
  // Update page title
  /* useEffect removed in favor of SEO component */

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <SEO
        title="Page Not Found | U.S.T Enterprises"
        description="The page you are looking for does not exist."
        robots="noindex, follow"
      />
      <div className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-6">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Button to="/" variant="primary" size="lg">
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default NotFound