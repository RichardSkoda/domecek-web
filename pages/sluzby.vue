<script setup lang="ts">
import { amenities } from '~/data/amenities'
import { sectionBanners } from '~/data/media'

useSeoMeta({
  title: 'Zařízení chaty — Domeček Oseček',
  description:
    'Přehled vybavení chaty Domeček Oseček: plně vybavená kuchyň, klimatizace, terasa s grilem, parkování u chaty a další.',
  ogTitle: 'Zařízení chaty — Domeček Oseček',
})
</script>

<template>
  <div>
    <PageHero title="Zařízení chaty" subtitle="Naše ubytování Vám poskytne zázemí pro strávení příjemného času s rodinou nebo přáteli." :image="sectionBanners.sluzby" />

    <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AmenityCard v-for="amenity in amenities" :key="amenity.id" :amenity="amenity" />
      </div>
    </section>

    <EquipmentChecklist />
  </div>
</template>
