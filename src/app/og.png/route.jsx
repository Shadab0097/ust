import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

// Default 1200x630 social share image, served at /og.png and generated at build time.
// (A route with a file extension avoids the trailing-slash redirect that file-based
// opengraph-image gets when `trailingSlash: true`.)
export const dynamic = 'force-static'

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #102A43 0%, #243B53 55%, #9C4221 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 34, fontWeight: 700 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 72,
              height: 72,
              borderRadius: 14,
              background: 'white',
              color: '#243B53',
              marginRight: 20,
              fontSize: 26,
            }}
          >
            UST
          </div>
          {site.name}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>Industrial Machinery Manufacturer</div>
          <div style={{ fontSize: 32, color: '#FBD38D' }}>IMT Manesar, Gurgaon, India · Since 1970</div>
        </div>
        <div style={{ fontSize: 24, color: '#D9E2EC' }}>
          Dust Collectors · Paint Booths · Ribbon Blenders · Conveyors · Flour Mill Machinery · Hydro Turbines
        </div>
      </div>
    ),
    { width: 1200, height: 630, headers: { 'Cache-Control': 'public, max-age=86400, immutable' } }
  )
}
