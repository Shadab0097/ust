// SEO helpers: page metadata + schema.org JSON-LD builders.
import { site, SITE_URL, absoluteUrl, coreKeywords, CONTENT_UPDATED } from '@/data/site'
import { productImageAlt, getAllProducts, getProductSeo, getIndustriesForProduct, getRelatedProducts } from '@/data/catalog'

const uniq = (arr) => [...new Set(arr.filter(Boolean).map((s) => s.trim()))]

const toKeywordArray = (kw) => (Array.isArray(kw) ? kw : String(kw || '').split(',')).map((s) => s.trim()).filter(Boolean)

/**
 * Build a Next.js Metadata object with canonical, Open Graph, Twitter and robots.
 * `title` is used as-is for the page; the layout template appends the brand when `brand` is true.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  images = [],
  type = 'website',
  noindex = false,
  absoluteTitle = false,
}) {
  const url = absoluteUrl(path)
  const DEFAULT_OG = { url: '/og.png', width: 1200, height: 630, alt: `${site.name} - Industrial Machinery Manufacturer in Gurgaon` }
  const ogImages = images.length ? images.map((img) => (typeof img === 'string' ? { url: img, alt: title } : img)) : [DEFAULT_OG]

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: uniq([...toKeywordArray(keywords), site.name]),
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: 'en_IN',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImages.map((i) => i.url),
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  }
}

/* ----------------------------- JSON-LD builders ----------------------------- */

const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

const postalAddress = () => ({ '@type': 'PostalAddress', ...site.address })

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    // LocalBusiness subtype for Maps / local pack + Organization for knowledge panel
    '@type': ['Organization', 'LocalBusiness'],
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: [site.shortName, 'UST Enterprises Gurgaon', 'U.S.T Enterprises IMT Manesar'],
    url: `${SITE_URL}/`,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
    image: `${SITE_URL}/assets/paintShop/psimg1.jpg`,
    description: site.description,
    foundingDate: site.foundingYear,
    founder: { '@type': 'Person', name: site.founder },
    email: site.email,
    telephone: site.phones[0].tel,
    priceRange: '₹₹',
    address: postalAddress(),
    geo: { '@type': 'GeoCoordinates', ...site.geo },
    hasMap: site.mapLink,
    areaServed: site.areaServed.map((name) => ({ '@type': name === 'India' ? 'Country' : 'Place', name })),
    openingHoursSpecification: site.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    contactPoint: site.phones.map((p) => ({
      '@type': 'ContactPoint',
      telephone: p.tel,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    })),
    knowsAbout: coreKeywords.slice(0, 17),
    sameAs: site.sameAs,
    // Explicit catalogue: tells Google & AI engines exactly which products this company makes.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industrial machinery manufactured by U.S.T Enterprises',
      itemListElement: getAllProducts().map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@id': `${absoluteUrl(`/products/${p.slug}/`)}#product`, name: p.name },
      })),
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: site.name,
    description: site.description,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-IN',
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function productSchema(product) {
  const url = absoluteUrl(`/products/${product.slug}/`)
  const seo = getProductSeo(product.slug)
  const industries = getIndustriesForProduct(product.slug)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name: product.name,
    url,
    mainEntityOfPage: `${url}#webpage`,
    // Answer-first definition = what AI engines quote; seoDescription kept as the marketing summary.
    description: seo.answer || product.seoDescription || product.description,
    disambiguatingDescription: product.seoDescription || product.shortDescription,
    image: (product.images || []).map((img) => absoluteUrl(img)),
    sku: `UST-${String(product.id).padStart(3, '0')}`,
    mpn: `UST-${product.slug.toUpperCase()}`,
    category: product.category,
    brand: { '@type': 'Brand', name: site.name },
    manufacturer: { '@id': ORG_ID },
    countryOfOrigin: { '@type': 'Country', name: 'India' },
    keywords: toKeywordArray(product.seoKeywords).join(', '),
    ...(industries.length
      ? { audience: { '@type': 'BusinessAudience', audienceType: industries.join(', ') } }
      : {}),
    isRelatedTo: getRelatedProducts(product.slug, 3).map((p) => ({
      '@type': 'Product',
      '@id': `${absoluteUrl(`/products/${p.slug}/`)}#product`,
      name: p.name,
    })),
    additionalProperty: Object.entries(product.specifications || {}).map(([name, value]) => ({
      '@type': 'PropertyValue',
      name,
      value,
    })),
  }

  // Google requires a real numeric price inside Offer. Only emit an Offer when a
  // starting price has been added to the product data (field: priceFrom, in INR).
  if (product.priceFrom) {
    schema.offers = {
      '@type': 'Offer',
      url,
      priceCurrency: 'INR',
      price: String(product.priceFrom),
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@id': ORG_ID },
      areaServed: 'IN',
    }
  }
  return schema
}

export function faqSchema(faqs = []) {
  if (!faqs.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function itemListSchema(products, name) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: absoluteUrl(`/products/${p.slug}/`),
      name: p.name,
      image: absoluteUrl(p.images?.[0] || '/logo.png'),
    })),
  }
}

export function webPageSchema({ path, name, description, type = 'WebPage', mainEntityId, image }) {
  const url = absoluteUrl(path)
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': mainEntityId || ORG_ID },
    ...(mainEntityId ? { mainEntity: { '@id': mainEntityId } } : {}),
    ...(image ? { primaryImageOfPage: { '@type': 'ImageObject', url: absoluteUrl(image) } } : {}),
    publisher: { '@id': ORG_ID },
    dateModified: CONTENT_UPDATED,
    inLanguage: 'en-IN',
  }
}

export function imageObjects(product) {
  return (product.images || []).map((img, i) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: absoluteUrl(img),
    name: productImageAlt(product, i),
    creator: { '@id': ORG_ID },
    creditText: site.name,
    copyrightNotice: `© ${site.name}`,
  }))
}
