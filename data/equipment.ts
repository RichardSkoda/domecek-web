import type { EquipmentGroup } from '~/types/content'

/** Zdroj: sekce „Praktické vybavení“ na stránce /sluzby původního webu. */
export const equipmentGroups: EquipmentGroup[] = [
  {
    id: 'hygiena',
    translations: {
      cs: {
        title: 'Hygiena a textil',
        items: ['Ručníky', 'Utěrky látkové/papírové', 'Papírové kapesníčky', 'Čisticí prostředky', 'Odpadkové pytle'],
      },
      en: {
        title: 'Hygiene and linens',
        items: ['Towels', 'Cloth/paper towels', 'Paper tissues', 'Cleaning products', 'Bin liners'],
      },
      de: {
        title: 'Hygiene und Textilien',
        items: ['Handtücher', 'Stoff-/Papierhandtücher', 'Papiertaschentücher', 'Reinigungsmittel', 'Müllbeutel'],
      },
    },
  },
  {
    id: 'uklid-nadobi',
    translations: {
      cs: {
        title: 'Úklid a nádobí',
        items: ['Houbičky a hadříky', 'Tablety do myčky', 'Toaletní papír', 'Mýdlo na ruce', 'Prostředek na mytí nádobí'],
      },
      en: {
        title: 'Cleaning and dishes',
        items: ['Sponges and cloths', 'Dishwasher tablets', 'Toilet paper', 'Hand soap', 'Dish soap'],
      },
      de: {
        title: 'Reinigung und Geschirr',
        items: ['Schwämme und Tücher', 'Spülmaschinentabs', 'Toilettenpapier', 'Handseife', 'Spülmittel'],
      },
    },
  },
  {
    id: 'vareni',
    translations: {
      cs: {
        title: 'Vaření',
        items: ['Olej na vaření', 'Prací prostředek', 'Základní koření', 'Kapsle do kávovaru (Nespresso)', 'Sáčkové čaje, rozpustná káva'],
      },
      en: {
        title: 'Cooking',
        items: ['Cooking oil', 'Laundry detergent', 'Basic spices', 'Coffee capsules (Nespresso)', 'Tea bags, instant coffee'],
      },
      de: {
        title: 'Kochen',
        items: ['Speiseöl', 'Waschmittel', 'Grundgewürze', 'Kaffeekapseln (Nespresso)', 'Teebeutel, löslicher Kaffee'],
      },
    },
  },
]
