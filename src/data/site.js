// Central business / site configuration. Update here once and every page,
// meta tag and JSON-LD block picks it up.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ustenterprises.in').replace(/\/$/, '')

// Bump this date whenever page content is meaningfully updated. Used for sitemap <lastmod>
// and schema dateModified. (A date that changes on every build is ignored by Google.)
export const CONTENT_UPDATED = '2026-09-28'

export const site = {
  name: 'U.S.T Enterprises',
  legalName: 'U.S.T Enterprises',
  shortName: 'UST Enterprises',
  tagline: 'Industrial Machinery Manufacturer in Gurgaon since 1970',
  description:
    'U.S.T Enterprises is an industrial machinery manufacturer in IMT Manesar, Gurgaon (Haryana, India) since 1970 - dust collectors, paint booths & paint shop lines, ribbon blenders, screw conveyors, hydro turbines, flour mill, grain cleaning and material handling equipment.',
  foundingYear: '1970',
  founder: 'Mr. Usman',
  email: 'ustenterprises13@gmail.com',
  phones: [
    { display: '+91 80489 70369', tel: '+918048970369' },
    { display: '+91 95609 83082', tel: '+919560983082' },
    { display: '+91 98716 27800', tel: '+919871627800' },
  ],
  whatsapp: '919560983082',
  address: {
    streetAddress: 'Plot No. 207, Sector 8, IMT Manesar',
    // Keep NAP (name/address/phone) identical to your Google Business Profile listing.
    addressLocality: 'Gurgaon',
    addressRegion: 'Haryana',
    postalCode: '122001',
    addressCountry: 'IN',
  },
  geo: { latitude: 28.36, longitude: 76.92 },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14041.066498064448!2d76.9205562!3d28.3601556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d5a49448839%3A0x6c637482f7e7760!2sSector%208%2C%20IMT%20Manesar%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Plot+207+Sector+8+IMT+Manesar+Gurugram',
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { days: ['Saturday'], opens: '09:00', closes: '13:00' },
  ],
  // Profiles that belong to the business (used in Organization "sameAs")
  sameAs: ['https://www.indiamart.com/ust-enterprises/'],
  areaServed: [
    'Gurugram', 'Manesar', 'Delhi', 'Noida', 'Faridabad', 'Ghaziabad', 'Haryana', 'Rajasthan', 'Punjab',
    'Uttar Pradesh', 'Uttarakhand', 'Himachal Pradesh', 'Madhya Pradesh', 'Gujarat', 'Maharashtra', 'India',
  ],
  clients: [
    'NTF India Pvt. Ltd (Units I, II, III)',
    'Bundy India Limited',
    'Auto Decor Private Limited',
    'Adhunik Cooling Systems',
    'Inergy Automotive Systems',
    'ENCO Engineers Combine',
    'Aay Kay Technologies',
    'Kuma Steel Tubes Ltd',
    'Annu Industries Ltd',
    'Casa Consulting Group',
    'Modlama Exports Global',
    'Shivam Auto Tech Ltd',
  ],
}

// Industry-wide keywords used on the home page and as a fallback everywhere.
export const coreKeywords = [
  'industrial machinery manufacturer',
  'industrial machinery manufacturer in Gurgaon',
  'industrial equipment manufacturer India',
  'machine manufacturer IMT Manesar',
  'engineering fabrication company Gurugram',
  'custom machine manufacturer Delhi NCR',
  'dust collector manufacturer',
  'paint booth manufacturer',
  'paint shop line manufacturer',
  'ribbon blender manufacturer',
  'screw conveyor manufacturer',
  'material handling equipment manufacturer',
  'flour mill machinery manufacturer',
  'grain cleaning machine manufacturer',
  'hydro turbine manufacturer India',
  'centrifugal blower manufacturer',
  'tensile structure manufacturer',
  'heavy fabrication works Haryana',
  'U.S.T Enterprises',
]

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/products/', label: 'Products' },
  { href: '/solutions/', label: 'Industries' },
  { href: '/contact/', label: 'Contact' },
]

export const absoluteUrl = (path = '/') => {
  if (/^https?:\/\//.test(path)) return path
  let p = path.startsWith('/') ? path : `/${path}`
  // Match trailingSlash: true in next.config (but never for files like /logo.png)
  if (!p.endsWith('/') && !/\.[a-z0-9]{2,5}$/i.test(p)) p = `${p}/`
  return `${SITE_URL}${p}`
}
