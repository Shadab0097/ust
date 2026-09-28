import { buildLlmsFullTxt } from '@/lib/llms'

// Served at /llms-full.txt - every product's full details in one Markdown file.
export const dynamic = 'force-static'

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  })
}
