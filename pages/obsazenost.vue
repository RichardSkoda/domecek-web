<script setup lang="ts">
import { sectionBanners } from '~/data/media'

useSeoMeta({
  title: 'Volné termíny — Domeček Oseček',
  description: 'Zjistěte aktuální obsazenost chaty Domeček Oseček v kalendáři nebo nás kontaktujte.',
})
</script>

<template>
  <div>
    <PageHero title="Volné termíny" :image="sectionBanners.obsazenost" />

    <section class="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <CalendarEmbed />
      <p class="mt-6 text-center text-sm text-ink-700">
        Pro zjištění aktuální obsazenosti nás prosím
        <NuxtLink to="/kontakt" class="font-medium text-forest-700 hover:underline">kontaktujte</NuxtLink>.
      </p>
    </section>
  </div>
</template>
