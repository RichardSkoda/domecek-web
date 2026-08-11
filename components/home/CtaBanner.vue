<script setup lang="ts">
import { galleryImages, galleryImageUrl } from '~/data/gallery'

const image = galleryImages.find((item) => item.id === 'fotogalerie-061')!
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="relative overflow-hidden">
    <NuxtImg
      :src="galleryImageUrl(image)"
      :alt="t(`gallery.categories.${image.category}`)"
      :width="image.width"
      :height="image.height"
      class="absolute inset-0 h-full w-full object-cover"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
      loading="lazy"
    />
    <div class="absolute inset-0 bg-ink-900/60" />
    <div class="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h2 class="font-display text-3xl font-semibold text-sand-50 sm:text-4xl">{{ t('home.cta.title') }}</h2>
      <div class="mt-8">
        <BaseButton :to="localePath('/kontakt')">{{ t('home.cta.button') }}</BaseButton>
      </div>
    </div>
  </section>
</template>
