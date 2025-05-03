import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '../components/ui/Button'

function NotFound() {
  // Update page title
  useEffect(() => {
    document.title = 'Page Not Found - U.S.T Enterprises'
  }, [])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
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