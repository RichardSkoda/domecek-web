import type { Amenity } from '~/types/content'

/** Zdroj: sekce „Zařízení chaty“ na stránce /sluzby původního webu. */
export const amenities: Amenity[] = [
  {
    id: 'prijezd-24-7',
    icon: 'clock',
    translations: {
      cs: {
        title: 'Možnost příjezdu 24/7',
        description: 'Bránu Vám otevřeme a chatu odkódujeme v čas příjezdu na dálku a klíče následně naleznete v trezoru u chaty.',
      },
      en: {
        title: '24/7 arrival',
        description: 'We open the gate and unlock the cottage remotely at your arrival time, and you’ll find the keys in a lockbox at the cottage.',
      },
      de: {
        title: 'Anreise rund um die Uhr',
        description: 'Wir öffnen das Tor und entriegeln das Ferienhaus zur Ankunftszeit per Fernzugriff, die Schlüssel finden Sie anschließend im Schlüsseltresor am Haus.',
      },
    },
  },
  {
    id: 'kuchyn',
    icon: 'kitchen',
    translations: {
      cs: {
        title: 'Plně vybavená kuchyň',
        description: 'Na chatě naleznete plně vybavenou kuchyň navíc se samostatnou vinotékou i kávovarem.',
      },
      en: {
        title: 'Fully equipped kitchen',
        description: 'The cottage has a fully equipped kitchen, plus a separate wine fridge and coffee machine.',
      },
      de: {
        title: 'Voll ausgestattete Küche',
        description: 'Im Ferienhaus finden Sie eine voll ausgestattete Küche, außerdem einen separaten Weinkühlschrank und eine Kaffeemaschine.',
      },
    },
  },
  {
    id: 'postele',
    icon: 'bed',
    translations: {
      cs: {
        title: 'Pohodlné postele',
        description: 'Kvalitní postel je základ pro zdravý odpočinek. Postele na chatě jsou osazeny kvalitními rošty i matracemi.',
      },
      en: {
        title: 'Comfortable beds',
        description: 'A good bed is the foundation of a good rest. The beds are fitted with quality slats and mattresses.',
      },
      de: {
        title: 'Komfortable Betten',
        description: 'Ein gutes Bett ist die Grundlage für erholsamen Schlaf. Die Betten sind mit hochwertigen Lattenrosten und Matratzen ausgestattet.',
      },
    },
  },
  {
    id: 'zabava',
    icon: 'tv',
    translations: {
      cs: {
        title: 'Zábava v chatě',
        description: 'Chvíle uvnitř chaty Vám může zpříjemnit televize s předplaceným Netflixem, kvalitní bluetooth reproduktory, wifi připojení, či společenské hry.',
      },
      en: {
        title: 'Entertainment indoors',
        description: 'Enjoy indoor evenings with a TV with a paid Netflix subscription, quality Bluetooth speakers, wifi, or board games.',
      },
      de: {
        title: 'Unterhaltung im Haus',
        description: 'Für gemütliche Stunden drinnen sorgen ein Fernseher mit bezahltem Netflix-Abo, hochwertige Bluetooth-Lautsprecher, WLAN und Gesellschaftsspiele.',
      },
    },
  },
  {
    id: 'terasa',
    icon: 'sun',
    translations: {
      cs: {
        title: 'Posezení na terase',
        description: 'Prostorná terasa disponuje jídelním stolem, plynovým grilem a příjemným podlahovým i stropním led osvětlením.',
      },
      en: {
        title: 'Terrace seating',
        description: 'The spacious terrace has a dining table, a gas grill, and pleasant floor and ceiling LED lighting.',
      },
      de: {
        title: 'Sitzbereich auf der Terrasse',
        description: 'Die geräumige Terrasse verfügt über einen Esstisch, einen Gasgrill sowie angenehme Boden- und Deckenbeleuchtung mit LED.',
      },
    },
  },
  {
    id: 'sport',
    icon: 'bike',
    translations: {
      cs: {
        title: 'Možnost sportovního vyžití',
        description: 'V okolí chaty se nachází cyklostezky, koupání, půjčovna lodiček, multifunkční sportovní hřiště, možnosti rybaření a další.',
      },
      en: {
        title: 'Sports and activities nearby',
        description: 'The surrounding area offers cycling paths, swimming, boat rental, a multi-purpose sports field, fishing and more.',
      },
      de: {
        title: 'Sportmöglichkeiten in der Nähe',
        description: 'In der Umgebung gibt es Radwege, Badegelegenheiten, einen Bootsverleih, einen Multifunktionssportplatz, Angelmöglichkeiten und mehr.',
      },
    },
  },
  {
    id: 'parkovani',
    icon: 'car',
    translations: {
      cs: {
        title: 'Parkování přímo u chaty',
        description: 'U chaty je za dálkově ovládanou bránou možné bez starostí zaparkovat až dvě vozidla. U stání je připravena 400V zásuvka pro možnost nabíjení elektrovozu.',
      },
      en: {
        title: 'Parking right at the cottage',
        description: 'Behind the remote-controlled gate you can safely park up to two vehicles. A 400V outlet is available for charging an electric car.',
      },
      de: {
        title: 'Parkplatz direkt am Haus',
        description: 'Hinter dem ferngesteuerten Tor können Sie sorgenfrei bis zu zwei Fahrzeuge parken. Am Stellplatz steht eine 400V-Steckdose zum Laden eines Elektroautos bereit.',
      },
    },
  },
  {
    id: 'tepelny-komfort',
    icon: 'thermometer',
    translations: {
      cs: {
        title: 'Tepelný komfort',
        description: 'O Váš tepelný komfort se bude starat klimatizační jednotka, podlahové vytápění, krb a v případě potřeby i přímotop.',
      },
      en: {
        title: 'Heating comfort',
        description: 'Your heating comfort is taken care of by an air-conditioning unit, underfloor heating, a fireplace, and an electric heater if needed.',
      },
      de: {
        title: 'Wärmekomfort',
        description: 'Für Ihren Wärmekomfort sorgen eine Klimaanlage, Fußbodenheizung, ein Kamin und bei Bedarf ein elektrisches Heizgerät.',
      },
    },
  },
  {
    id: 'upravna-vody',
    icon: 'droplet',
    translations: {
      cs: {
        title: 'Úpravna vody',
        description: 'Voda z vlastní studny prochází několika stupňovou filtrací s finálním čištěním reverzní osmózou na úroveň kojenecké vody.',
      },
      en: {
        title: 'Water treatment plant',
        description: 'Water from our own well passes through multi-stage filtration, finished with reverse-osmosis purification to infant-water quality.',
      },
      de: {
        title: 'Wasseraufbereitung',
        description: 'Das Wasser aus dem eigenen Brunnen durchläuft eine mehrstufige Filterung mit abschließender Reinigung durch Umkehrosmose bis auf Babywasserqualität.',
      },
    },
  },
  {
    id: 'ohniste',
    icon: 'fire',
    translations: {
      cs: {
        title: 'Venkovní ohniště',
        description: 'Venkovní ohniště je ideální pro relaxaci a společné chvíle s přáteli a rodinou při plápolání ohně a opékání buřtů, či opékání mas a zeleniny na roštu.',
      },
      en: {
        title: 'Outdoor fire pit',
        description: 'The outdoor fire pit is perfect for relaxing evenings with friends and family — roast sausages over the fire, or grill meat and vegetables.',
      },
      de: {
        title: 'Feuerstelle im Freien',
        description: 'Die Feuerstelle im Freien eignet sich ideal für entspannte Stunden mit Freunden und Familie beim Grillen von Würstchen, Fleisch und Gemüse.',
      },
    },
  },
  {
    id: 'koupelna',
    icon: 'shower',
    translations: {
      cs: {
        title: 'Koupelna se vším potřebným',
        description: 'V koupelně naleznete mimo prostorného sprchového koutu, toalety a pisoáru i pračku se sušičkou a fén.',
      },
      en: {
        title: 'Bathroom with everything you need',
        description: 'Besides a spacious shower, toilet and urinal, the bathroom also has a washer-dryer and a hairdryer.',
      },
      de: {
        title: 'Badezimmer mit allem Notwendigen',
        description: 'Neben einer geräumigen Dusche, Toilette und einem Urinal finden Sie im Badezimmer auch einen Waschtrockner und einen Föhn.',
      },
    },
  },
  {
    id: 'relax',
    icon: 'leaf',
    translations: {
      cs: {
        title: 'Prostě jen relax',
        description: 'Někdy je nejlepší se jen zaposlouchat do zpěvu ptáků a sledovat srnky pohybující se na hranici louky a lesa.',
      },
      en: {
        title: 'Simply relax',
        description: 'Sometimes the best thing to do is just listen to the birdsong and watch deer moving along the edge of the meadow and forest.',
      },
      de: {
        title: 'Einfach entspannen',
        description: 'Manchmal ist es am schönsten, einfach dem Vogelgesang zu lauschen und Rehe am Rand von Wiese und Wald zu beobachten.',
      },
    },
  },
]
