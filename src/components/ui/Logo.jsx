function Logo({ scrolled = false }) {
  // In a real project, this would be an SVG or image
  // For simplicity, using a styled div as a placeholder
  return (
    <div 
      className={`w-10 h-10 flex items-center justify-center rounded-md 
                 ${scrolled ? 'bg-primary-600 text-white' : 'bg-white text-primary-600'}`}
    >
      <span className="font-bold text-lg">UST</span>
    </div>
  )
}

export default Logo