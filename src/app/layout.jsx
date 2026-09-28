import { Archivo, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import JsonLd from '@/components/seo/JsonLd'
import { site, SITE_URL, coreKeywords } from '@/data/site'
import { organizationSchema, websiteSchema } from '@/lib/seo'

// Self-hosted fonts (no render-blocking Google Fonts request, no layout shift)
// Archivo (variable, with width axis) gives an engineered, industrial display face;
// Plus Jakarta Sans keeps body copy warm and highly legible.
const display = Archivo({ subsets: ['latin'], axes: ['wdth'], display: 'swap', variable: '--font-display' })
const body = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-body' })

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | Industrial Machinery Manufacturer in Gurgaon, India`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: coreKeywords,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  category: 'Industrial Machinery',
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_IN',
    url: `${SITE_URL}/`,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${site.name} - Industrial Machinery Manufacturer` }],
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: { icon: '/logo.png', apple: '/logo.png' },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
  },
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'IMT Manesar, Gurugram',
    'geo.position': `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
}

export const viewport = {
  themeColor: '#243B53',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal animations only when JS runs; crawlers & no-JS users see everything. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      {/* suppressHydrationWarning: browser extensions (Grammarly, LastPass...) inject attributes on <body>.
          Only affects this element's own attributes - mismatches inside the page are still reported. */}
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
