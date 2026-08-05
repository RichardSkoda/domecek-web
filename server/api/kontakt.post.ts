import type { ContactFormPayload, FormSubmitResult } from '~/types/content'

export default defineEventHandler(async (event): Promise<FormSubmitResult> => {
  const body = await readBody<ContactFormPayload>(event)

  if (!body?.name || !body?.email || !body?.message || !body?.gdprConsent) {
    throw createError({ statusCode: 400, statusMessage: 'Vyplňte prosím všechna povinná pole.' })
  }

  // TODO: napojit reálné odesílání e-mailu (SMTP / e-mailová služba) — zatím pouze přijmeme a potvrdíme zprávu.
  console.log('[kontakt] nová zpráva:', body)

  return {
    success: true,
    message: 'Děkujeme za Vaši zprávu, ozveme se Vám co nejdříve.',
  }
})
