// Shared Web3Forms submission helper for contact & quote forms.
const ENDPOINT = 'https://api.web3forms.com/submit'
// Web3Forms access keys are designed to be public (they only allow posting to your inbox).
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'e8db4a00-9d48-4f28-9eb5-4d0dd07f62f4'

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const PHONE_RE = /^[+()\-\s\d]{7,20}$/

export async function submitForm({ subject, fromName, fields, honeypot }) {
  // Silently drop bot submissions caught by the honeypot field.
  if (honeypot) return { success: true }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject,
      from_name: fromName,
      page: typeof window !== 'undefined' ? window.location.href : '',
      ...fields,
    }),
  })
  const data = await res.json().catch(() => ({}))
  return { success: Boolean(res.ok && data.success), message: data.message }
}
