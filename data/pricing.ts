import type { PriceNote, PriceRow } from '~/types/content'

/** Zdroj: stránka /cenik původního webu. */
export const priceRows: PriceRow[] = [
  {
    id: 'noc-leto',
    unit: 'night',
    priceCzk: 3000,
    translations: {
      cs: 'Pronájem chaty / noc (květen – září)',
      en: 'Cottage rental / night (May – September)',
      de: 'Vermietung des Ferienhauses / Nacht (Mai – September)',
    },
  },
  {
    id: 'noc-zima',
    unit: 'night',
    priceCzk: 2000,
    translations: {
      cs: 'Pronájem chaty / noc (říjen – duben)',
      en: 'Cottage rental / night (October – April)',
      de: 'Vermietung des Ferienhauses / Nacht (Oktober – April)',
    },
  },
  {
    id: 'tyden-leto',
    unit: 'week',
    priceCzk: 16000,
    translations: {
      cs: 'Zvýhodněná cena při pronájmu na 7 nocí (květen – září)',
      en: 'Discounted rate for a 7-night stay (May – September)',
      de: 'Vergünstigter Preis bei Miete für 7 Nächte (Mai – September)',
    },
  },
  {
    id: 'tyden-zima',
    unit: 'week',
    priceCzk: 10000,
    translations: {
      cs: 'Zvýhodněná cena při pronájmu na 7 nocí (říjen – duben)',
      en: 'Discounted rate for a 7-night stay (October – April)',
      de: 'Vergünstigter Preis bei Miete für 7 Nächte (Oktober – April)',
    },
  },
]

export const priceNotes: PriceNote[] = [
  {
    id: 'zahrnuto',
    translations: {
      cs: 'Cena pronájmu zahrnuje také lůžkoviny a závěrečný úklid.',
      en: 'The rental price also includes bed linen and final cleaning.',
      de: 'Der Mietpreis beinhaltet auch Bettwäsche und Endreinigung.',
    },
  },
  {
    id: 'voda',
    translations: {
      cs: 'Voda pochází z vlastní studny.',
      en: 'The water comes from our own well.',
      de: 'Das Wasser stammt aus einem eigenen Brunnen.',
    },
  },
  {
    id: 'elektrina',
    translations: {
      cs: 'Cena elektřiny činí 8 Kč/kWh a je účtována dle skutečné spotřeby.',
      en: 'Electricity costs CZK 8/kWh and is billed according to actual consumption.',
      de: 'Der Strompreis beträgt 8 CZK/kWh und wird nach tatsächlichem Verbrauch abgerechnet.',
    },
  },
  {
    id: 'min-pobyt',
    translations: {
      cs: 'Minimální doba pronájmu jsou dvě noci.',
      en: 'The minimum rental period is two nights.',
      de: 'Die Mindestmietdauer beträgt zwei Nächte.',
    },
  },
]
