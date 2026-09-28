// Builds the Markdown served at /llms.txt and /llms-full.txt (llmstxt.org convention).
// These give LLMs / AI agents a clean, factual, citation-ready summary of the business and
// every product - no HTML, scripts or navigation noise to parse.
import { site, SITE_URL, absoluteUrl, CONTENT_UPDATED } from '@/data/site'
import { getAllProducts, getProductSeo, getIndustriesForProduct } from '@/data/catalog'
import { solutions } from '@/data/solutions'

const addr = `${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.addressRegion} ${site.address.postalCode}, India`

function header() {
  return [
    `# ${site.name}`,
    '',
    `> ${site.name} is an industrial machinery manufacturer located at ${addr}, established in ${site.foundingYear}. It designs, fabricates, installs and services dust collectors, centrifugal blowers, water curtain paint booths, paint shop lines, ribbon blenders, screw and telescopic belt conveyors, hydraulic scissor lifts, plate rolling machines, hammer mills, vibro destoners, seed cleaning machines, commercial atta chakki flour mills, small hydro turbines and tensile structures for factories across India.`,
    '',
    '## Key facts',
    '',
    `- Legal name: ${site.legalName}`,
    `- Founded: ${site.foundingYear}, Gurgaon (Gurugram), Haryana, India; founder: ${site.founder}`,
    `- Business type: direct manufacturer (not a trader or reseller); in-house design, cutting, rolling, welding, machining, painting and assembly`,
    `- Factory: ${addr}`,
    `- Phone: ${site.phones.map((p) => p.display).join(', ')}`,
    `- Email: ${site.email}`,
    `- WhatsApp: +${site.whatsapp}`,
    `- Service area: ${site.areaServed.join(', ')} (pan-India installation; export orders supported)`,
    `- Quality: ISO 9001 quality processes, stage-wise inspection and trial runs before dispatch`,
    `- Pricing: factory-direct; quotations on request, usually within 24 hours`,
    `- Website: ${SITE_URL}/`,
    `- Content last updated: ${CONTENT_UPDATED}`,
    '',
  ]
}

export function buildLlmsTxt() {
  const products = getAllProducts()
  return [
    ...header(),
    '## Products',
    '',
    ...products.map((p) => `- [${p.name}](${absoluteUrl(`/products/${p.slug}/`)}): ${getProductSeo(p.slug).answer || p.shortDescription}`),
    '',
    '## Industries served',
    '',
    ...solutions.map((s) => `- [${s.name}](${absoluteUrl(`/solutions/${s.slug}/`)}): ${s.seoDescription}`),
    '',
    '## Company',
    '',
    `- [About ${site.name}](${absoluteUrl('/about/')}): history since ${site.foundingYear}, facility and quality processes`,
    `- [Contact](${absoluteUrl('/contact/')}): factory address, phone numbers, email, working hours and map`,
    `- [Request a quote](${absoluteUrl('/quote/')}): enquiry form for pricing and specifications`,
    '',
    '## Optional',
    '',
    `- [Full product details for LLMs](${absoluteUrl('/llms-full.txt')}): specifications, features, applications and FAQs for every product in one file`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    '',
  ].join('\n')
}

export function buildLlmsFullTxt() {
  const products = getAllProducts()
  const blocks = products.map((p) => {
    const seo = getProductSeo(p.slug)
    const industries = getIndustriesForProduct(p.slug)
    return [
      `## ${p.name}`,
      '',
      `URL: ${absoluteUrl(`/products/${p.slug}/`)}`,
      `Category: ${p.category}`,
      `Manufacturer: ${site.name}, IMT Manesar, Gurgaon, India`,
      '',
      seo.answer || p.description,
      '',
      p.description,
      '',
      '### Key features',
      '',
      ...(p.features || []).map((f) => `- ${f}`),
      '',
      '### Technical specifications',
      '',
      '| Parameter | Value |',
      '| --- | --- |',
      ...Object.entries(p.specifications || {}).map(([k, v]) => `| ${k} | ${String(v).replace(/\|/g, '/')} |`),
      '',
      ...(industries.length ? ['### Applications and industries', '', industries.join(', '), ''] : []),
      '### Frequently asked questions',
      '',
      ...(p.faqs || []).flatMap((f) => [`**Q: ${f.question}**`, '', `A: ${f.answer}`, '']),
      `Get a quote: ${absoluteUrl(`/quote/?product=${encodeURIComponent(p.name)}`)} | Phone: ${site.phones[1].display} | Email: ${site.email}`,
      '',
    ].join('\n')
  })

  return [...header(), '---', '', ...blocks].join('\n')
}
