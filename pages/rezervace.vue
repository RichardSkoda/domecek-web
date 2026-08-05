<script setup lang="ts">
import { sectionBanners } from '~/data/media'
import { siteConfig } from '~/data/siteConfig'

useSeoMeta({
  title: 'Rezervace — Domeček Oseček',
  description: 'Vyplňte rezervační formulář nebo nás kontaktujte telefonicky či e-mailem.',
})
</script>

<template>
  <div>
    <PageHero
      title="Rezervace"
      subtitle="Pro rezervaci naší rekreační chaty stačí vyplnit rezervační formulář."
      :image="sectionBanners.rezervace"
    />

    <section class="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p class="text-sm text-ink-700">
        V rezervačním formuláři uveďte požadovaný termín pobytu, počet osob a další případné požadavky. Po odeslání
        formuláře Vás budeme kontaktovat ohledně potvrzení rezervace a předání dalších informací.
      </p>

      <div class="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink-700">
        <p>
          Raději řešíte věci rychle a ústně? Rezervaci je možné provést také na telefonním čísle
          <a :href="`tel:${siteConfig.phoneHref}`" class="font-medium text-forest-700 hover:underline">{{ siteConfig.phone }}</a>.
        </p>
        <p>
          Preferujete e-mail?
          <a :href="`mailto:${siteConfig.email}`" class="font-medium text-forest-700 hover:underline">{{ siteConfig.email }}</a>
        </p>
      </div>

      <div class="mt-10">
        <BookingForm />
      </div>
    </section>
  </div>
</template>
