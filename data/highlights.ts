import type { Highlight } from '~/types/content'

/** Zdroj: bullet seznam v úvodní sekci homepage původního webu. */
export const highlights: Highlight[] = [
  {
    id: 'dispozice',
    icon: 'home',
    translations: { cs: 'Dispozice 3kk', en: '3-room layout (3kk)', de: 'Aufteilung 3kk' },
  },
  {
    id: 'kapacita',
    icon: 'users',
    translations: { cs: 'Ubytování až pro 4 osob', en: 'Accommodation for up to 5 people', de: 'Unterkunft für bis zu 5 Personen' },
  },
  {
    id: 'kuchyn',
    icon: 'kitchen',
    translations: { cs: 'Plně zařízená kuchyň', en: 'Fully equipped kitchen', de: 'Voll ausgestattete Küche' },
  },
  {
    id: 'topeni',
    icon: 'thermometer',
    translations: {
      cs: 'Podlahové vytápění, krb, klimatizace, přímotop',
      en: 'Underfloor heating, fireplace, air conditioning, electric heater',
      de: 'Fußbodenheizung, Kamin, Klimaanlage, Heizgerät',
    },
  },
  {
    id: 'okna',
    icon: 'window',
    translations: {
      cs: 'Plastová okna s trojskly, sítě proti hmyzu, žaluzie',
      en: 'Triple-glazed plastic windows, insect screens, blinds',
      de: 'Kunststofffenster mit Dreifachverglasung, Insektenschutz, Jalousien',
    },
  },
  {
    id: 'media',
    icon: 'tv',
    translations: {
      cs: 'Televize, Wifi a vestavěné bluetooth reproduktory',
      en: 'TV, wifi and built-in Bluetooth speakers',
      de: 'Fernseher, WLAN und eingebaute Bluetooth-Lautsprecher',
    },
  },
    {
    id: 'laundry',
    icon: 'washing-machine',
    translations: {
      cs: 'Pračka se sušičkou',
      en: 'Washing machine with dryer',
      de: 'Waschmaschine mit Trockner',
    },
  },
  {
    id: 'ohniste',
    icon: 'fire',
    translations: { cs: 'Venkovní ohniště, plynový gril', en: 'Outdoor fire pit, gas grill', de: 'Feuerstelle im Freien, Gasgrill' },
  },
  {
    id: 'brana',
    icon: 'car',
    translations: {
      cs: 'Elektrická brána a možnost nabíjení elektromobilu',
      en: 'Electric gate and electric-car charging option',
      de: 'Elektrisches Tor und Lademöglichkeit für Elektroautos',
    },
  },
  {
    id: 'terasa',
    icon: 'sun',
    translations: {
      cs: 'Prostorná terasa s přímým výhledem na louku a les',
      en: 'Spacious terrace with a direct view of the meadow and forest',
      de: 'Geräumige Terrasse mit direktem Blick auf Wiese und Wald',
    },
  },
  {
    id: 'cyklo',
    icon: 'bike',
    translations: {
      cs: 'Cyklostezka u chaty, multifunkční hřiště vzdálené 200 m',
      en: 'Cycling path by the cottage, multi-purpose sports field 200 m away',
      de: 'Radweg am Haus, Multifunktionssportplatz 200 m entfernt',
    },
  },
  {
    id: 'labe',
    icon: 'droplet',
    translations: {
      cs: '250 metrů od Labe a přívozu',
      en: '250 metres from the Elbe river and ferry crossing',
      de: '250 Meter von der Elbe und der Fähre entfernt',
    },
  },
]
