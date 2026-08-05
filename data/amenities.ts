import type { Amenity } from '~/types/content'

/** Zdroj: sekce „Zařízení chaty“ na stránce /sluzby původního webu. */
export const amenities: Amenity[] = [
  {
    id: 'prijezd-24-7',
    title: 'Možnost příjezdu 24/7',
    description: 'Bránu Vám otevřeme a chatu odkódujeme v čas příjezdu na dálku a klíče následně naleznete v trezoru u chaty.',
    icon: 'clock',
  },
  {
    id: 'kuchyn',
    title: 'Plně vybavená kuchyň',
    description: 'Na chatě naleznete plně vybavenou kuchyň navíc se samostatnou vinotékou i kávovarem.',
    icon: 'kitchen',
  },
  {
    id: 'postele',
    title: 'Pohodlné postele',
    description: 'Kvalitní postel je základ pro zdravý odpočinek. Postele na chatě jsou osazeny kvalitními rošty i matracemi.',
    icon: 'bed',
  },
  {
    id: 'zabava',
    title: 'Zábava v chatě',
    description: 'Chvíle uvnitř chaty Vám může zpříjemnit televize s předplaceným Netflixem, kvalitní bluetooth reproduktory, wifi připojení, či společenské hry.',
    icon: 'tv',
  },
  {
    id: 'terasa',
    title: 'Posezení na terase',
    description: 'Prostorná terasa disponuje jídelním stolem, plynovým grilem a příjemným podlahovým i stropním led osvětlením.',
    icon: 'sun',
  },
  {
    id: 'sport',
    title: 'Možnost sportovního vyžití',
    description: 'V okolí chaty se nachází cyklostezky, koupání, půjčovna lodiček, multifunkční sportovní hřiště, možnosti rybaření a další.',
    icon: 'bike',
  },
  {
    id: 'parkovani',
    title: 'Parkování přímo u chaty',
    description: 'U chaty je za dálkově ovládanou bránou možné bez starostí zaparkovat až dvě vozidla. U stání je připravena 400V zásuvka pro možnost nabíjení elektrovozu.',
    icon: 'car',
  },
  {
    id: 'tepelny-komfort',
    title: 'Tepelný komfort',
    description: 'O Váš tepelný komfort se bude starat klimatizační jednotka, podlahové vytápění, krb a v případě potřeby i přímotop.',
    icon: 'thermometer',
  },
  {
    id: 'upravna-vody',
    title: 'Úpravna vody',
    description: 'Voda z vlastní studny prochází několika stupňovou filtrací s finálním čištěním reverzní osmózou na úroveň kojenecké vody.',
    icon: 'droplet',
  },
  {
    id: 'ohniste',
    title: 'Venkovní ohniště',
    description: 'Venkovní ohniště je ideální pro relaxaci a společné chvíle s přáteli a rodinou při plápolání ohně a opékání buřtů, či opékání mas a zeleniny na roštu.',
    icon: 'fire',
  },
  {
    id: 'koupelna',
    title: 'Koupelna se vším potřebným',
    description: 'V koupelně naleznete mimo prostorného sprchového koutu, toalety a pisoáru i pračku se sušičkou a fén.',
    icon: 'shower',
  },
  {
    id: 'relax',
    title: 'Prostě jen relax',
    description: 'Někdy je nejlepší se jen zaposlouchat do zpěvu ptáků a sledovat srnky pohybující se na hranici louky a lesa.',
    icon: 'leaf',
  },
]
