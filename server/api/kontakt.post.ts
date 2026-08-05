import type { ContactFormPayload, FormSubmitResult } from '~/types/content'

export default defineEventHandler(async (event): Promise<FormSubmitResult> => {
  const body = await readBody<ContactFormPayload>(event)

  if (!body?.name || !body?.email || !body?.message || !body?.gdprConsent) {
    throw createError({ statusCode: 400, statusMessage: 'missingFields', data: { code: 'missingFields' } })
  }

  try {
    await sendContactEmail(body)
  } catch (error) {
    console.error('[kontakt] odeslání e-mailu selhalo:', error)
    throw createError({ statusCode: 502, statusMessage: 'serverError', data: { code: 'serverError' } })
  }

  return {
    success: true,
    code: 'contactSuccess',
  }
})
