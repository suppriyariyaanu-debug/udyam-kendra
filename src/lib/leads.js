/**
 * Single exit point for every enquiry the site collects.
 *
 * There is no backend in this project yet, so this resolves locally and logs
 * the payload in development. When an endpoint exists, replace the body of
 * `submitLead` — nothing else in the application needs to change.
 *
 * Example once an endpoint exists:
 *   const response = await fetch('/api/leads', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(payload),
 *   })
 *   if (!response.ok) throw new Error('Could not submit enquiry')
 *   return response.json()
 */
export async function submitLead(payload) {
  if (import.meta.env.DEV) {
    console.info('[lead]', payload)
  }

  // Simulated latency so the submitting state is visible and honest.
  await new Promise((resolve) => setTimeout(resolve, 550))

  return { ok: true, receivedAt: new Date().toISOString() }
}
