<script setup lang="ts">
import { galleryImages, galleryImageUrl } from '~/data/gallery'

const image = galleryImages.find((item) => item.id === 'fotogalerie-061')!
</script>

<template>
  <section class="relative overflow-hidden">
    <NuxtImg
      :src="galleryImageUrl(image)"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
      class="absolute inset-0 h-full w-full object-cover"
      sizes="sm:100vw"
      loading="lazy"
    />
    <div class="absolute inset-0 bg-ink-900/60" />
    <div class="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h2 class="font-display text-3xl font-semibold text-sand-50 sm:text-4xl">Zaujala Vás naše chata?</h2>
      <div class="mt-8">
        <BaseButton to="/kontakt">Ozvěte se nám</BaseButton>
      </div>
    </div>
  </section>
</template>
