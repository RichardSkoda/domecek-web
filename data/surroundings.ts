import type { SurroundingBlock } from '~/types/content'

/** Zdroj: sekce „1. Přírodní krásy...“, „2. Cyklistika...“, „3. Relax se vším všudy“ na homepage. */
export const surroundings: SurroundingBlock[] = [
  {
    id: 'priroda',
    translations: {
      cs: {
        title: 'Přírodní krásy v okolí chaty',
        body: 'Lužní les v chatové oblasti Oseček představuje cenné přírodní území s rozmanitým ekosystémem. Dominantními dřevinami jsou duby, vrby a olše, které vytvářejí hustý porost. V blízkosti potoků se nachází bohatá vegetace, včetně kapradin a kvetoucích bylin. Les poskytuje stín a ochlazení během teplých měsíců, zvukové pozadí tvoří šumění větru a zpěv ptáků.',
      },
      en: {
        title: 'Natural beauty around the cottage',
        body: 'The floodplain forest in the Oseček cottage area is a valuable natural site with a diverse ecosystem. Oaks, willows and alders dominate, forming dense stands. Near the streams there is lush vegetation, including ferns and flowering herbs. The forest provides shade and cooling during the warm months, with the sound of wind and birdsong as a backdrop.',
      },
      de: {
        title: 'Naturschönheiten rund um das Ferienhaus',
        body: 'Der Auwald im Ferienhausgebiet Oseček ist ein wertvolles Naturgebiet mit vielfältigem Ökosystem. Dominierende Baumarten sind Eichen, Weiden und Erlen, die einen dichten Bestand bilden. In der Nähe der Bäche findet sich üppige Vegetation, darunter Farne und blühende Kräuter. Der Wald spendet in den warmen Monaten Schatten und Kühle, begleitet vom Rauschen des Windes und Vogelgesang.',
      },
    },
    image: {
      id: 'home-013',
      file: 'home-013.webp',
      translations: {
        cs: 'Lesní cesta v okolí chaty na podzim',
        en: 'Forest path near the cottage in autumn',
        de: 'Waldweg in der Nähe des Ferienhauses im Herbst',
      },
      width: 1920,
      height: 1080,
    },
  },
  {
    id: 'cyklistika',
    translations: {
      cs: {
        title: 'Cyklistika v polabské nížině',
        body: 'Cyklistika v okolí chatové oblasti Oseček je vhodná především pro rekreační jezdce a rodiny s dětmi. Terén je převážně rovinatý, v oblasti se nachází značené cyklostezky a klidné vedlejší silnice. K oblíbeným cílům patří soutok Labe a Cidliny, Kolín s historickým centrem a rozhlednou nebo lázeňské Poděbrady s kolonádou a parkem. Podél tras jsou odpočinková místa vhodná i pro piknik.',
      },
      en: {
        title: 'Cycling in the Elbe lowlands',
        body: 'Cycling around the Oseček cottage area is ideal for recreational riders and families with children. The terrain is mostly flat, with marked cycling paths and quiet side roads. Popular destinations include the confluence of the Elbe and Cidlina rivers, Kolín with its historic centre and lookout tower, or the spa town of Poděbrady with its colonnade and park. Rest spots suitable for picnics can be found along the routes.',
      },
      de: {
        title: 'Radfahren im Elbtiefland',
        body: 'Radtouren rund um das Ferienhausgebiet Oseček eignen sich besonders für Freizeitradler und Familien mit Kindern. Das Gelände ist überwiegend flach, es gibt markierte Radwege und ruhige Nebenstraßen. Beliebte Ziele sind der Zusammenfluss von Elbe und Cidlina, Kolín mit seinem historischen Zentrum und Aussichtsturm oder der Kurort Poděbrady mit Kolonnade und Park. Entlang der Strecken gibt es Rastplätze, die sich auch für ein Picknick eignen.',
      },
    },
    image: {
      id: 'home-005',
      file: 'home-005.webp',
      translations: {
        cs: 'Letecký pohled na řeku Labe u Osečku',
        en: 'Aerial view of the Elbe river near Oseček',
        de: 'Luftaufnahme der Elbe bei Oseček',
      },
      width: 1800,
      height: 1012,
    },
  },
  {
    id: 'relax',
    translations: {
      cs: {
        title: 'Relax se vším všudy',
        body: 'Domeček na Osečku je menší útulná chata s dispozicí 3kk, ideální pro relaxaci uprostřed krásné přírody. Plně vybavená kuchyně, podlahové vytápění, klimatizace, elektrický přímotop v ložnici a krbová kamna přidají na útulné atmosféře. Stropní bezdrátové reproduktory a TV s předplaceným Netflixem oceníte při horším počasí, wifi pokrývá celou chatu i zahradu.',
      },
      en: {
        title: 'Relaxation with everything included',
        body: 'Domeček in Oseček is a small, cosy cottage with a 3-room layout, ideal for relaxing amid beautiful nature. A fully equipped kitchen, underfloor heating, air conditioning, an electric heater in the bedroom and a wood-burning stove all add to the cosy atmosphere. Ceiling-mounted wireless speakers and a TV with a paid Netflix subscription come in handy on rainy days, and wifi covers the whole cottage and garden.',
      },
      de: {
        title: 'Entspannung mit allem Drum und Dran',
        body: 'Das Domeček in Oseček ist ein kleines, gemütliches Ferienhaus mit der Aufteilung 3kk, ideal zum Entspannen inmitten schöner Natur. Eine voll ausgestattete Küche, Fußbodenheizung, Klimaanlage, ein elektrisches Heizgerät im Schlafzimmer und ein Kaminofen sorgen für eine gemütliche Atmosphäre. Deckenmontierte Funklautsprecher und ein Fernseher mit bezahltem Netflix-Abo sind bei schlechtem Wetter praktisch, WLAN deckt das gesamte Haus und den Garten ab.',
      },
    },
    image: {
      id: 'fotogalerie-047',
      file: 'fotogalerie-047.webp',
      translations: {
        cs: 'Večerní posezení u ohniště',
        en: 'Evening gathering by the fire pit',
        de: 'Abendliches Beisammensein an der Feuerstelle',
      },
      width: 1920,
      height: 1080,
    },
  },
]
