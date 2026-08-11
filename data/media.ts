import type { HeroImage, SectionImage } from '~/types/content'

export const homeHero: HeroImage = {
  id: 'hero-home',
  file: 'home-001.webp',
  translations: {
    cs: 'Chata Domeček Oseček za zlaté hodiny s krytou terasou',
    en: 'Domeček Oseček cottage at golden hour with a covered terrace',
    de: 'Ferienhaus Domeček Oseček zur goldenen Stunde mit überdachter Terrasse',
  },
  width: 3840,
  height: 2160,
}

/** Menší banner obrázky pro hlavičky podstránek (public/images/sections/). */
export const sectionBanners: Record<string, SectionImage> = {
  intro: {
    id: 'home-003',
    file: 'home-003.webp',
    translations: {
      cs: 'Světlý obývací pokoj s posezením',
      en: 'Bright living room with seating',
      de: 'Helles Wohnzimmer mit Sitzgelegenheit',
    },
    width: 3840,
    height: 2161,
  },
  sluzby: {
    id: 'sluzby-017',
    file: 'sluzby-017.webp',
    translations: {
      cs: 'Obývací pokoj se sedací soupravou',
      en: 'Living room with a sofa set',
      de: 'Wohnzimmer mit Sitzgarnitur',
    },
    width: 1920,
    height: 1080,
  },
  fotogalerie: {
    id: 'fotogalerie-050',
    file: 'fotogalerie-050.webp',
    translations: {
      cs: 'Chata s pergolou při pohledu ze zahrady',
      en: 'The cottage with a pergola, seen from the garden',
      de: 'Ferienhaus mit Pergola, Blick vom Garten',
    },
    width: 1920,
    height: 1080,
  },
  cenik: {
    id: 'home-010',
    file: 'home-010.webp',
    translations: {
      cs: 'Chata s krytou terasou a upravenou zahradou',
      en: 'The cottage with a covered terrace and landscaped garden',
      de: 'Ferienhaus mit überdachter Terrasse und gepflegtem Garten',
    },
    width: 3840,
    height: 2161,
  },
  obsazenost: {
    id: 'fotogalerie-041',
    file: 'fotogalerie-041.webp',
    translations: {
      cs: 'Výhled na okolní louky a les',
      en: 'View of the surrounding meadows and forest',
      de: 'Blick auf die umliegenden Wiesen und den Wald',
    },
    width: 3840,
    height: 2160,
  },
  rezervace: {
    id: 'home-005',
    file: 'home-005.webp',
    translations: {
      cs: 'Letecký pohled na řeku Labe u Osečku',
      en: 'Aerial view of the Elbe river near Oseček',
      de: 'Luftaufnahme der Elbe bei Oseček',
    },
    width: 1600,
    height: 900,
  },
  kontakt: {
    id: 'home-002',
    file: 'home-002.webp',
    translations: {
      cs: 'Pohled na chatu od zahrady',
      en: 'View of the cottage from the garden',
      de: 'Blick auf das Ferienhaus vom Garten aus',
    },
    width: 3840,
    height: 2160,
  },
}

/** Grafický odznak "Sledujte nás na Instagramu" (public/images/sections/). */
export const instagramBadge: SectionImage = {
  id: 'home-014',
  file: 'instagram-badge.webp',
  translations: {
    cs: 'Sledujte nás na Instagramu @domecek_osecek',
    en: 'Follow us on Instagram @domecek_osecek',
    de: 'Folgen Sie uns auf Instagram @domecek_osecek',
  },
  width: 1186,
  height: 319,
}

export function sectionImageUrl(image: SectionImage) {
  return `/images/sections/${image.file}`
}

export function heroImageUrl(image: HeroImage) {
  return `/images/hero/${image.file}`
}
