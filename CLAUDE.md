# Projekt: Modernizace webu Domeček Oseček

## Úkol

Vytvoř nový moderní web pro ubytování Domeček Oseček.

Starý web je pouze zdroj:
- textů
- fotografií
- informací o službách
- struktury obsahu

Nevytvářej kopii starého Webnode designu.

Cílem je vytvořit moderní produkční web pro rok 2026.

---

# Pracovní postup

Nejdříve:

1. Prostuduj všechny soubory ve složce `scraped`.
2. Analyzuj obsah, fotografie a strukturu.
3. Navrhni architekturu aplikace.
4. Až po schválení začni generovat kód.

Nevymýšlej nové informace.
Nepřidávej služby nebo vlastnosti, které nejsou ve zdrojových datech.

---

# Zdrojová data

Ve složce:

`scraped/`

jsou:

## website.md

Kompletní textový obsah původního webu.

Použij jako hlavní zdroj textů.

---

## images-web/

Optimalizované fotografie ve formátu WebP.

Používej tyto obrázky v novém webu.

---

## contact-sheet.png

Vizuální přehled všech dostupných fotografií.

Použij pro správný výběr fotografií do jednotlivých sekcí.

---

## metadata.json

Informace o stránkách a obrázcích.

---

## screenshots/

Pouze vizuální reference původního webu.

Nepřebírej původní design.

---

# Technologie

Použij:

- Nuxt 3
- Vue 3
- TypeScript
- Composition API
- `<script setup lang="ts">`
- Tailwind CSS
- @nuxt/image
- Nuxt SEO
- Nuxt Content pokud bude vhodné
- VueUse
- Motion/Vue pouze pro jemné animace

Nepoužívej:

- React
- Next.js

---

# Design

Navrhni vzhled:

- přírodní
- útulný
- moderní
- prémiový
- rodinný
- důvěryhodný

Inspirace:

- Airbnb
- boutique ubytování
- moderní chalupy

Nepoužívej:

- starý Webnode styl
- přeplácané bannery
- agresivní animace
- levně působící šablony

---

# Struktura webu

## /

Domovská stránka:

- hero sekce s hlavní fotografií
- představení Domečku
- hlavní výhody
- služby
- galerie
- okolí
- dostupnost
- rezervace
- kontakt
- footer


## /sluzby

Přehled služeb.


## /fotogalerie

Moderní galerie:

- masonry layout
- lightbox
- lazy loading
- optimalizované obrázky


## /cenik

Přehledný ceník.


## /obsazenost

Integrace Google Calendar:

https://calendar.google.com/calendar/u/0/newembed?src=9725ef8ef4ca211ec2f135454293ff9c335a630224577534f19d7d575209d3a4@group.calendar.google.com&ctz=Europe/Prague


## /rezervace

Rezervační formulář:

- jméno
- telefon
- email
- termín
- počet osob
- zpráva


## /kontakt

Obsah:

- kontakt
- mapa
- formulář
- adresa

---

# Práce s fotografiemi

Používej:

`scraped/images-web/`

Používej:

- Nuxt Image
- WebP obrázky
- lazy loading
- responsive images

Rozděl fotografie podle použití:

- hero
- exteriér
- interiér
- služby
- okolí
- galerie

Nevkládej stejné fotografie opakovaně bez důvodu.

---

# SEO

Každá stránka musí obsahovat:

- title
- meta description
- OpenGraph
- canonical URL
- Schema.org:

  - LodgingBusiness
  - LocalBusiness

Použij Nuxt SEO best practices.

---

# Kvalita kódu

Požadavky:

- Vue 3 Composition API
- `<script setup lang="ts">`
- TypeScript
- komponentový přístup
- reusable komponenty
- composables
- mobile first
- responzivní design
- WCAG accessibility
- čistý a udržovatelný kód

---

# Očekávaná struktura projektu

Použij standardní Nuxt strukturu: Markdown
