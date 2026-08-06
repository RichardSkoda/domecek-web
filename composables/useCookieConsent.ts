export type CookieConsentStatus = 'accepted' | 'rejected' | null

/**
 * Souhlas se rozhoduje jednou pro celý web (Google Maps + Google Kalendář jsou jediné
 * neesenciální cookies, které web používá) a ukládá se do cookie na 1 rok.
 */
export function useCookieConsent() {
  const consent = useCookie<CookieConsentStatus>('cookie_consent', {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    default: () => null,
  })

  function accept() {
    consent.value = 'accepted'
  }

  function reject() {
    consent.value = 'rejected'
  }

  function reset() {
    consent.value = null
  }

  return { consent, accept, reject, reset }
}
