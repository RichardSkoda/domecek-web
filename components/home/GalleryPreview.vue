<script setup lang="ts">
import { galleryImages, galleryImageUrl } from '~/data/gallery'

const previewOrder = [
  'fotogalerie-018',
  'fotogalerie-027',
  'fotogalerie-034',
  'home-006',
  'fotogalerie-047',
  'fotogalerie-023',
  'fotogalerie-062',
  'home-005',
]
const preview = previewOrder.map((id) => galleryImages.find((image) => image.id === id)!)
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <SectionHeading :eyebrow="t('home.gallery.eyebrow')" :title="t('home.gallery.title')" />
      <BaseButton :to="localePath('/fotogalerie')" variant="ghost">{{ t('home.gallery.cta') }}</BaseButton>
    </div>

    <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
      <NuxtImg
        v-for="image in preview"
        :key="image.id"
        :src="galleryImageUrl(image)"
        :alt="t(`gallery.categories.${image.category}`)"
        :width="image.width"
        :height="image.height"
        class="aspect-square w-full rounded-xl2 object-cover shadow-sm"
        sizes="xs:50vw sm:25vw"
        loading="lazy"
      />
    </div>
  </section>
</template>
