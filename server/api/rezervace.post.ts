import type { BookingFormPayload, FormSubmitResult } from '~/types/content'

export default defineEventHandler(async (event): Promise<FormSubmitResult> => {
  const body = await readBody<BookingFormPayload>(event)

  if (!body?.name || !body?.email || !body?.phone || !body?.dateRange || !body?.gdprConsent) {
    throw createError({ statusCode: 400, statusMessage: 'Vyplňte prosím všechna povinná pole.' })
  }

  // TODO: napojit reálné odesílání e-mailu (SMTP / e-mailová služba) — zatím pouze přijmeme a potvrdíme požadavek.
  console.log('[rezervace] nová poptávka:', body)

  return {
    success: true,
    message: 'Děkujeme za Vaši poptávku, ozveme se Vám s potvrzením rezervace.',
  }
})
