import { site } from '@/data/site'

export default function manifest() {
  return {
    name: `${site.name} - Industrial Machinery Manufacturer`,
    short_name: site.shortName,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#243B53',
    icons: [{ src: '/logo.png', sizes: 'any', type: 'image/png' }],
  }
}
