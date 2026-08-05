import type { NavLink, SiteConfig } from '~/types/content'

export const siteConfig: SiteConfig = {
  name: 'Domeček Oseček',
  tagline: 'Užijte si klid a pohodu se zázemím skvěle vybavené chaty',
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
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Ose%C4%8Dek%20206%2C%20289%2041%20Ose%C4%8Dek&output=embed',
  googleMapsUrl: 'https://www.google.com/maps?q=Ose%C4%8Dek%20206%2C%20289%2041%20Ose%C4%8Dek',
}

export const navLinks: NavLink[] = [
  { label: 'Úvod', to: '/' },
  { label: 'Zařízení', to: '/sluzby' },
  { label: 'Fotogalerie', to: '/fotogalerie' },
  { label: 'Ceník', to: '/cenik' },
  { label: 'Volné termíny', to: '/obsazenost' },
  { label: 'Rezervace', to: '/rezervace' },
  { label: 'Kontakt', to: '/kontakt' },
]
