import type { NavLink, SiteConfig } from '~/types/content'

export const siteConfig: SiteConfig = {
  name: 'Domeček Oseček',
  translations: {
    cs: { tagline: 'Užijte si klid a pohodu se zázemím skvěle vybavené chaty' },
    en: { tagline: 'Enjoy peace and comfort in a beautifully equipped cottage' },
    de: { tagline: 'Genießen Sie Ruhe und Komfort in einem bestens ausgestatteten Ferienhaus' },
  },
  phone: '733 656 261',
  phoneHref: '+420733656261',
  email: 'michal.tauchman@silverdahl.cz',
  address: {
    street: 'Oseček 206',
    zip: '289 41',
    city: 'Oseček',
  },
  instagramUrl: 'https://www.instagram.com/domecek_osecek?igsh=dGMxdml3anVod3A2',
  googleCalendarEmbedUrl:
    'https://calendar.google.com/calendar/u/0/newembed?src=9725ef8ef4ca211ec2f135454293ff9c335a630224577534f19d7d575209d3a4@group.calendar.google.com&ctz=Europe/Prague',
  googleCalendarIcsUrl:
    'https://calendar.google.com/calendar/ical/9725ef8ef4ca211ec2f135454293ff9c335a630224577534f19d7d575209d3a4%40group.calendar.google.com/public/basic.ics',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Ose%C4%8Dek%20206%2C%20289%2041%20Ose%C4%8Dek&output=embed',
  googleMapsUrl: 'https://www.google.com/maps?q=Ose%C4%8Dek%20206%2C%20289%2041%20Ose%C4%8Dek',
}

export const navLinks: NavLink[] = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.services', to: '/sluzby' },
  { labelKey: 'nav.gallery', to: '/fotogalerie' },
  { labelKey: 'nav.pricing', to: '/cenik' },
  { labelKey: 'nav.availability', to: '/obsazenost' },
  { labelKey: 'nav.booking', to: '/rezervace' },
  { labelKey: 'nav.contact', to: '/kontakt' },
]
