import type { EquipmentGroup } from '~/types/content'

/** Zdroj: sekce „Praktické vybavení“ na stránce /sluzby původního webu. */
export const equipmentGroups: EquipmentGroup[] = [
  {
    id: 'hygiena',
    title: 'Hygiena a textil',
    items: ['Ručníky', 'Utěrky látkové/papírové', 'Papírové kapesníčky', 'Čisticí prostředky', 'Odpadkové pytle'],
  },
  {
    id: 'uklid-nadobi',
    title: 'Úklid a nádobí',
    items: ['Houbičky a hadříky', 'Tablety do myčky', 'Toaletní papír', 'Mýdlo na ruce', 'Prostředek na mytí nádobí'],
  },
  {
    id: 'vareni',
    title: 'Vaření',
    items: ['Olej na vaření', 'Prací prostředek', 'Základní koření', 'Kapsle do kávovaru (Nespresso)', 'Sáčkové čaje, rozpustná káva'],
  },
]
