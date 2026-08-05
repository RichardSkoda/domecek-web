<script setup lang="ts">
import { sectionBanners } from '~/data/media'

useSeoMeta({
  title: 'Ceník — Domeček Oseček',
  description: 'Sezónní ceník pronájmu chaty Domeček Oseček — cena za noc i zvýhodněná cena při pronájmu na 7 nocí.',
})
</script>

<template>
  <div>
    <PageHero title="Ceník" subtitle="Ceny pronájmu chaty se liší v závislosti na sezóně." :image="sectionBanners.cenik" />

    <section class="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <PriceTable />
      <PriceNotes />

      <div class="mt-10">
        <BaseButton to="/rezervace">Odeslat rezervační poptávku</BaseButton>
      </div>
    </section>
  </div>
</template>
