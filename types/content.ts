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
  alt: string
  category: ImageCategory
  width: number
  height: number
  /** zobrazit i mimo /fotogalerie (např. na homepage) */
  featured?: boolean
}

export interface HeroImage {
  id: string
  file: string
  alt: string
  width: number
  height: number
}

export interface SectionImage {
  id: string
  file: string
  alt: string
  width: number
  height: number
}

export interface Amenity {
  id: string
  title: string
  description: string
  icon: string
}

export interface EquipmentGroup {
  id: string
  title: string
  items: string[]
}

export interface Highlight {
  id: string
  label: string
  icon: string
}

export interface SurroundingBlock {
  id: string
  title: string
  body: string
  image: SectionImage
}

export type PriceUnit = 'noc' | '7 nocí'

export interface PriceRow {
  id: string
  seasonLabel: string
  unit: PriceUnit
  priceCzk: number
}

export interface PriceNote {
  id: string
  text: string
}

export interface Address {
  street: string
  zip: string
  city: string
}

export interface SiteConfig {
  name: string
  tagline: string
  phone: string
  phoneHref: string
  email: string
  address: Address
  instagramUrl: string
  googleCalendarEmbedUrl: string
  googleMapsEmbedUrl: string
  googleMapsUrl: string
  contactPersonNote?: string
}

export interface NavLink {
  label: string
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
  success: boolean
  message: string
}
