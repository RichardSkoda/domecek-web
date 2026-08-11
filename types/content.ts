export type Locale = 'cs' | 'en' | 'de'

export type Localized<T> = Record<Locale, T>

export type ImageCategory =
  | 'exterier'
  | 'interier'
  | 'kuchyne'
  | 'loznice'
  | 'koupelna'
  | 'terasa'
  | 'zahrada'
  | 'okoli'
  | 'atmosfera'

export interface GalleryImage {
  id: string
  /** cesta relativně k /images/gallery/ */
  file: string
  category: ImageCategory
  width: number
  height: number
  /** zobrazit i mimo /fotogalerie (např. na homepage) */
  featured?: boolean
}

export interface HeroImage {
  id: string
  file: string
  translations: Localized<string>
  width: number
  height: number
}

export interface SectionImage {
  id: string
  file: string
  translations: Localized<string>
  width: number
  height: number
}

export interface Amenity {
  id: string
  translations: Localized<{ title: string; description: string }>
  icon: string
}

export interface EquipmentGroup {
  id: string
  translations: Localized<{ title: string; items: string[] }>
}

export interface Highlight {
  id: string
  translations: Localized<string>
  icon: string
}

export interface SurroundingBlock {
  id: string
  translations: Localized<{ title: string; body: string }>
  image: SectionImage
}

export type PriceUnitKey = 'night' | 'week'

export interface PriceRow {
  id: string
  translations: Localized<string>
  unit: PriceUnitKey
  priceCzk: number
}

export interface PriceNote {
  id: string
  translations: Localized<string>
}

export interface Address {
  street: string
  zip: string
  city: string
}

export interface SiteConfig {
  name: string
  translations: Localized<{ tagline: string }>
  phone: string
  phoneHref: string
  email: string
  address: Address
  instagramUrl: string
  googleCalendarEmbedUrl: string
  googleCalendarIcsUrl: string
  googleMapsEmbedUrl: string
  googleMapsUrl: string
  contactPersonNote?: string
}

export interface NavLink {
  labelKey: string
  to: string
}

export interface BookingFormPayload {
  name: string
  phone: string
  email: string
  dateRange: string
  guests: number
  message?: string
  gdprConsent: boolean
}

export interface ContactFormPayload {
  name: string
  email: string
  message: string
  gdprConsent: boolean
}

export interface FormSubmitResult {
  success: true
  code: 'contactSuccess' | 'bookingSuccess'
}

export interface BusyRange {
  start: string
  end: string
  /** Celodenní událost (Google Kalendář k vybranému dni odjezdu při ukládání vždy přičte den navíc). */
  dateOnly: boolean
}
