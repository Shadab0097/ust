import { site } from '@/data/site'

// Floating WhatsApp / call button - big conversion driver for Indian B2B enquiries.
export default function WhatsAppButton() {
  const msg = encodeURIComponent('Hello U.S.T Enterprises, I would like a quotation for ')
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with U.S.T Enterprises on WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.56 4.2 1.62 6.02L4 29l8.14-1.58a12 12 0 0 0 3.9.65h.01C22.68 28.07 28 22.68 28 16.04 28 9.4 22.68 3 16.04 3Zm0 22.9h-.01a9.9 9.9 0 0 1-3.5-.64l-.25-.1-4.83.94.97-4.7-.16-.26A9.87 9.87 0 0 1 6.1 15.04c0-5.48 4.46-9.94 9.95-9.94 5.48 0 9.84 4.46 9.84 9.94 0 5.49-4.37 10.86-9.85 10.86Zm5.45-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  )
}
