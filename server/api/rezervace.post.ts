import type { BookingFormPayload, FormSubmitResult } from '~/types/content'

export default defineEventHandler(async (event): Promise<FormSubmitResult> => {
  const body = await readBody<BookingFormPayload>(event)

  if (!body?.name || !body?.email || !body?.phone || !body?.dateRange || !body?.gdprConsent) {
    throw createError({ statusCode: 400, statusMessage: 'missingFields', data: { code: 'missingFields' } })
  }

  try {
    await sendBookingEmail(body)
  } catch (error) {
    console.error('[rezervace] odeslání e-mailu selhalo:', error)
    throw createError({ statusCode: 502, statusMessage: 'serverError', data: { code: 'serverError' } })
  }

  return {
    success: true,
    code: 'bookingSuccess',
  }
})
