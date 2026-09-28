import PageHero from '@/components/ui/PageHero'
import IndustriesBento from '@/components/home/IndustriesBento'
import ProcessStory from '@/components/home/ProcessStory'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { solutions } from '@/data/solutions'
import { buildMetadata, webPageSchema } from '@/lib/seo'
import { absoluteUrl } from '@/data/site'

const TITLE = 'Industries We Serve - Plant Machinery'
const DESCRIPTION =
  'Industrial machinery for air pollution control, paint shops, material handling, flour & grain mills, process mixing, metal forming and hydro power projects.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/solutions/',
  keywords: solutions.flatMap((s) => s.keywords.slice(0, 2)),
})

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: '/solutions/', name: TITLE, description: DESCRIPTION, type: 'CollectionPage' }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: solutions.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: absoluteUrl(`/solutions/${s.slug}/`) })),
          },
        ]}
      />
      <PageHero
        eyebrow="Industries"
        title="One workshop. Eight industries."
        subtitle="Complete machinery and plant solutions, grouped by application - from automotive paint shops to dal mills and hydro projects."
        image="/assets/waterCurtain/wcimg1.jpg"
      >
        <Breadcrumbs items={[{ name: 'Industries', path: '/solutions/' }]} />
      </PageHero>

      <IndustriesBento showHeading={false} headingLevel="h2" />
      <ProcessStory eyebrow="How every project runs" />
    </>
  )
}
