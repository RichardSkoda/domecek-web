import type { ImageCategory } from '~/types/content'

export const galleryCategoryLabels: Record<ImageCategory, string> = {
  exterier: 'Exteriér',
  interier: 'Interiér',
  kuchyne: 'Kuchyně',
  loznice: 'Ložnice',
  koupelna: 'Koupelna',
  terasa: 'Terasa',
  zahrada: 'Zahrada',
  okoli: 'Okolí',
  atmosfera: 'Atmosféra',
}

export const galleryCategoryOrder: ImageCategory[] = [
  'exterier',
  'interier',
  'kuchyne',
  'loznice',
  'koupelna',
  'terasa',
  'zahrada',
  'okoli',
  'atmosfera',
]
