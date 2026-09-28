import { SITE_URL } from '@/data/site'

// AI / answer-engine crawlers we explicitly WANT (being cited in ChatGPT, Claude, Perplexity,
// Gemini, Copilot and Apple Intelligence answers drives B2B enquiries).
const AI_CRAWLERS = [
  'GPTBot', // OpenAI training
  'OAI-SearchBot', // ChatGPT search results
  'ChatGPT-User', // ChatGPT browsing on a user's behalf
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended', // Gemini / Vertex AI grounding
  'Applebot',
  'Applebot-Extended',
  'Bingbot', // also powers Copilot & ChatGPT search index
  'DuckAssistBot',
  'Meta-ExternalAgent',
  'Amazonbot',
  'CCBot', // Common Crawl (used by many LLMs)
]

export default function robots() {
  const disallow = ['/api/', '/_next/data/']
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow },
      { userAgent: AI_CRAWLERS, allow: ['/', '/llms.txt', '/llms-full.txt'], disallow },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
