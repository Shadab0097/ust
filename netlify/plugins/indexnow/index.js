// Netlify build plugin: after a successful PRODUCTION deploy, submit every sitemap URL to
// IndexNow (Bing, Yandex, Seznam, Naver...). Bing's index also feeds ChatGPT search and Copilot,
// so new/changed product pages get discovered in hours instead of weeks.
// Only public page URLs are sent. Failures are logged and never fail the deploy.

const KEY = 'fd248058838acaa1b95f8d9fd93b3420' // must match public/<KEY>.txt

export const onSuccess = async ({ utils }) => {
  if (process.env.CONTEXT !== 'production') {
    console.log('[indexnow] skipped (not a production deploy)')
    return
  }
  const site = (process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || '').replace(/\/$/, '')
  if (!site) return console.log('[indexnow] skipped (no site URL)')

  try {
    const xml = await (await fetch(`${site}/sitemap.xml`)).text()
    const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
    if (!urlList.length) return console.log('[indexnow] no URLs found in sitemap')

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: new URL(site).host, key: KEY, keyLocation: `${site}/${KEY}.txt`, urlList }),
    })
    console.log(`[indexnow] submitted ${urlList.length} URLs -> HTTP ${res.status}`)
  } catch (err) {
    utils.status.show({ title: 'IndexNow', summary: `Submission failed: ${err.message}` })
    console.log('[indexnow] failed:', err.message)
  }
}
