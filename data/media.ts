import type { HeroImage, SectionImage } from '~/types/content'

export const homeHero: HeroImage = {
  id: 'hero-home',
  file: 'fotogalerie-037.webp',
  alt: 'Chata Domeček Oseček za zlaté hodiny s krytou terasou',
  width: 1920,
  height: 1080,
}

/** Menší banner obrázky pro hlavičky podstránek (public/images/sections/). */
export const sectionBanners: Record<string, SectionImage> = {
  intro: { id: 'home-003', file: 'home-003.webp', alt: 'Světlý obývací pokoj s posezením', width: 1920, height: 1080 },
  sluzby: { id: 'sluzby-017', file: 'sluzby-017.webp', alt: 'Obývací pokoj se sedací soupravou', width: 1920, height: 1080 },
  fotogalerie: { id: 'sluzby-015', file: 'sluzby-015.webp', alt: 'Chata s pergolou při pohledu ze zahrady', width: 1920, height: 1080 },
  cenik: { id: 'home-010', file: 'home-010.webp', alt: 'Chata s krytou terasou a upravenou zahradou', width: 1920, height: 1080 },
  obsazenost: { id: 'fotogalerie-041', file: 'fotogalerie-041.webp', alt: 'Výhled na okolní louky a les', width: 1920, height: 1080 },
  rezervace: { id: 'home-005', file: 'home-005.webp', alt: 'Letecký pohled na řeku Labe u Osečku', width: 1800, height: 1012 },
  kontakt: { id: 'home-002', file: 'home-002.webp', alt: 'Pohled na chatu od zahrady', width: 1920, height: 1080 },
}

export function sectionImageUrl(image: SectionImage) {
  return `/images/sections/${image.file}`
}

export function heroImageUrl(image: HeroImage) {
  return `/images/hero/${image.file}`
}
