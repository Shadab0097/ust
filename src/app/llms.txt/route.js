import { buildLlmsTxt } from '@/lib/llms'

// Served at /llms.txt - generated at build time.
export const dynamic = 'force-static'

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  })
}
