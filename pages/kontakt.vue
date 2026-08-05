<script setup lang="ts">
import { sectionBanners } from '~/data/media'
import { siteConfig } from '~/data/siteConfig'

useSeoMeta({
  title: 'Kontakt — Domeček Oseček',
  description: `Kontaktujte nás telefonicky, e-mailem nebo přes formulář. Adresa: ${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}.`,
})
</script>

<template>
  <div>
    <PageHero title="Kontakt" subtitle="Pokud máte zájem o pronájem, můžete nás kontaktovat telefonicky, mailem, či přiloženým formulářem." :image="sectionBanners.kontakt" />

    <section class="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <ContactInfo />

      <hr class="my-14 border-sand-200">

      <SectionHeading eyebrow="Formulář" title="Napište nám" />

      <div class="mt-8 grid gap-10 lg:grid-cols-2">
        <ContactForm />
        <MapEmbed />
      </div>

      <a
        :href="siteConfig.instagramUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-10 inline-flex items-center gap-2 text-sm font-medium text-forest-700 hover:text-forest-800"
      >
        Sledujte nás na Instagramu @domecek_osecek
      </a>
    </section>
  </div>
</template>
