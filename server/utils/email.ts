import { Resend } from 'resend'
import type { BookingFormPayload, ContactFormPayload } from '~/types/content'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

type Row = [label: string, value: string | number | undefined]

function toHtmlTable(fields: Row[]) {
  const rows = fields
    .filter(([, value]) => value !== undefined && value !== '')
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 16px 4px 0;color:#555;white-space:nowrap;vertical-align:top;"><strong>${label}</strong></td><td style="padding:4px 0;white-space:pre-wrap;">${escapeHtml(String(value))}</td></tr>`,
    )
    .join('')
  return `<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">${rows}</table>`
}

function toPlainText(title: string, fields: Row[]) {
  const lines = fields
    .filter(([, value]) => value !== undefined && value !== '')
    .map(([label, value]) => `${label}: ${value}`)
  return [title, '', ...lines].join('\n')
}

async function send(options: { subject: string; html: string; text: string; replyTo: string }) {
  const config = useRuntimeConfig()

  if (!config.resendApiKey) {
    console.warn('[email] NUXT_RESEND_API_KEY není nastaven — e-mail se neodeslal, obsah je pouze zalogován výše.')
    return
  }

  const client = new Resend(config.resendApiKey as string)
  const { error } = await client.emails.send({
    from: config.emailFrom as string,
    to: config.emailTo as string,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
    text: options.text,
  })

  if (error) {
    throw new Error(error.message)
  }
}

export async function sendBookingEmail(payload: BookingFormPayload) {
  const fields: Row[] = [
    ['Jméno a příjmení', payload.name],
    ['Telefon', payload.phone],
    ['E-mail', payload.email],
    ['Poptávaný termín', payload.dateRange],
    ['Počet osob', payload.guests],
    ['Zpráva', payload.message],
  ]

  console.log('[rezervace] nová poptávka:', payload)

  await send({
    subject: `Nová poptávka na rezervaci — ${payload.name}`,
    html: `<h2>Nová poptávka na rezervaci</h2>${toHtmlTable(fields)}`,
    text: toPlainText('Nová poptávka na rezervaci', fields),
    replyTo: payload.email,
  })
}

export async function sendContactEmail(payload: ContactFormPayload) {
  const fields: Row[] = [
    ['Jméno a příjmení', payload.name],
    ['E-mail', payload.email],
    ['Zpráva', payload.message],
  ]

  console.log('[kontakt] nová zpráva:', payload)

  await send({
    subject: `Nová zpráva z kontaktního formuláře — ${payload.name}`,
    html: `<h2>Nová zpráva z kontaktního formuláře</h2>${toHtmlTable(fields)}`,
    text: toPlainText('Nová zpráva z kontaktního formuláře', fields),
    replyTo: payload.email,
  })
}
