/** @type {import('next').NextConfig} */

// Security headers applied to every route.
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
]

const nextConfig = {
  // Pin the project root so Next never picks up a lockfile from a parent folder.
  turbopack: { root: import.meta.dirname },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Keep trailing slashes so URLs match the ones already indexed / in the old sitemap
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      // The free *.netlify.app address serves the same site - keep it out of Google so it can't
      // compete with (duplicate) the real domain. Netlify already noindexes deploy previews.
      {
        source: '/:path*',
        has: [{ type: 'host', value: '(?<sub>.*)\\.netlify\\.app' }],
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }],
      },
      {
        source: '/(llms.txt|llms-full.txt)',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }],
      },
      {
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }],
      },
      {
        source: '/videos/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }],
      },
    ]
  },
  async redirects() {
    return [
      // Common legacy / typo URLs -> canonical pages
      { source: '/home', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/product', destination: '/products/', permanent: true },
      { source: '/product/:slug', destination: '/products/:slug/', permanent: true },
      { source: '/contact-us', destination: '/contact/', permanent: true },
      { source: '/about-us', destination: '/about/', permanent: true },
      { source: '/get-quote', destination: '/quote/', permanent: true },
    ]
  },
}

export default nextConfig
