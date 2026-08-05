import type { SurroundingBlock } from '~/types/content'

/** Zdroj: sekce „1. Přírodní krásy...“, „2. Cyklistika...“, „3. Relax se vším všudy“ na homepage. */
export const surroundings: SurroundingBlock[] = [
  {
    id: 'priroda',
    title: 'Přírodní krásy v okolí chaty',
    body:
      'Lužní les v chatové oblasti Oseček představuje cenné přírodní území s rozmanitým ekosystémem. Dominantními dřevinami jsou duby, vrby a olše, které vytvářejí hustý porost. V blízkosti potoků se nachází bohatá vegetace, včetně kapradin a kvetoucích bylin. Les poskytuje stín a ochlazení během teplých měsíců, zvukové pozadí tvoří šumění větru a zpěv ptáků.',
    image: { id: 'home-013', file: 'home-013.webp', alt: 'Lesní cesta v okolí chaty na podzim', width: 1920, height: 1080 },
  },
  {
    id: 'cyklistika',
    title: 'Cyklistika v polabské nížině',
    body:
      'Cyklistika v okolí chatové oblasti Oseček je vhodná především pro rekreační jezdce a rodiny s dětmi. Terén je převážně rovinatý, v oblasti se nachází značené cyklostezky a klidné vedlejší silnice. K oblíbeným cílům patří soutok Labe a Cidliny, Kolín s historickým centrem a rozhlednou nebo lázeňské Poděbrady s kolonádou a parkem. Podél tras jsou odpočinková místa vhodná i pro piknik.',
    image: { id: 'home-005', file: 'home-005.webp', alt: 'Letecký pohled na řeku Labe u Osečku', width: 1800, height: 1012 },
  },
  {
    id: 'relax',
    title: 'Relax se vším všudy',
    body:
      'Domeček na Osečku je menší útulná chata s dispozicí 3kk, ideální pro relaxaci uprostřed krásné přírody. Plně vybavená kuchyně, podlahové vytápění, klimatizace, elektrický přímotop v ložnici a krbová kamna přidají na útulné atmosféře. Stropní bezdrátové reproduktory a TV s předplaceným Netflixem oceníte při horším počasí, wifi pokrývá celou chatu i zahradu.',
    image: { id: 'fotogalerie-047', file: 'fotogalerie-047.webp', alt: 'Večerní posezení u ohniště', width: 1920, height: 1080 },
  },
]
