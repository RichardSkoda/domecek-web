import type { PriceNote, PriceRow } from '~/types/content'

/** Zdroj: stránka /cenik původního webu. */
export const priceRows: PriceRow[] = [
  { id: 'noc-leto', seasonLabel: 'Pronájem chaty / noc (květen – září)', unit: 'noc', priceCzk: 3000 },
  { id: 'noc-zima', seasonLabel: 'Pronájem chaty / noc (říjen – duben)', unit: 'noc', priceCzk: 2000 },
  { id: 'tyden-leto', seasonLabel: 'Zvýhodněná cena při pronájmu na 7 nocí (květen – září)', unit: '7 nocí', priceCzk: 16000 },
  { id: 'tyden-zima', seasonLabel: 'Zvýhodněná cena při pronájmu na 7 nocí (říjen – duben)', unit: '7 nocí', priceCzk: 10000 },
]

export const priceNotes: PriceNote[] = [
  { id: 'zahrnuto', text: 'Cena pronájmu zahrnuje také lůžkoviny a závěrečný úklid.' },
  { id: 'voda', text: 'Voda pochází z vlastní studny.' },
  { id: 'elektrina', text: 'Cena elektřiny činí 8 Kč/kWh a je účtována dle skutečné spotřeby.' },
  { id: 'min-pobyt', text: 'Minimální doba pronájmu jsou dvě noci.' },
  { id: 'kauce', text: 'Vratná kauce je ve výši 5 000 Kč.' },
]
