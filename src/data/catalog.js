// Query helpers over the product catalogue. Server-only usage (build time).
import products from './products'
import { solutions, productIndustries } from './solutions'
import { productSeo } from './productSeo'

export const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const getAllProducts = () => products

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug) || null

export const getSolutionBySlug = (slug) => solutions.find((s) => s.slug === slug) || null

export const getSolutionsForProduct = (slug) => solutions.filter((s) => s.products.includes(slug))

export const getProductsForSolution = (solution) =>
  solution.products.map((slug) => getProductBySlug(slug)).filter(Boolean)

export const getIndustriesForProduct = (slug) => productIndustries[slug] || []

export const getProductSeo = (slug) => productSeo[slug] || {}

// Related products = products sharing a solution group, then fill with others.
export const getRelatedProducts = (slug, limit = 3) => {
  const related = new Set()
  getSolutionsForProduct(slug).forEach((s) => s.products.forEach((p) => p !== slug && related.add(p)))
  products.forEach((p) => related.size < limit && p.slug !== slug && related.add(p.slug))
  return [...related].slice(0, limit).map(getProductBySlug).filter(Boolean)
}

// A short "headline spec" for cards, picked from the first matching spec key.
const HEADLINE_KEYS = [
  'Load Capacity', 'Power Output', 'Airflow Capacity', 'Production Capacity', 'Processing Capacity',
  'Flow Rate', 'Max Plate Thickness', 'Total Extended Length', 'Air Flow Rate', 'Motor Power', 'Span Capability', 'Power',
]
export const getHeadlineSpec = (product) => {
  const specs = product.specifications || {}
  const key = HEADLINE_KEYS.find((k) => specs[k])
  return key ? { label: key, value: specs[key] } : null
}

export const productImageAlt = (product, index = 0) =>
  index === 0
    ? `${product.name} manufactured by U.S.T Enterprises, Gurgaon`
    : `${product.name} - ${product.category} view ${index + 1}`
