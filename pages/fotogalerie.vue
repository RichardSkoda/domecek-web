<script setup lang="ts">
import type { ImageCategory } from '~/types/content'
import { galleryImages } from '~/data/gallery'
import { sectionBanners } from '~/data/media'

useSeoMeta({
  title: 'Fotogalerie — Domeček Oseček',
  description: 'Fotogalerie chaty Domeček Oseček — interiér, exteriér, terasa i okolní příroda.',
})

const activeCategory = ref<ImageCategory | 'vse'>('vse')

const filtered = computed(() =>
  activeCategory.value === 'vse'
    ? galleryImages
    : galleryImages.filter((image) => image.category === activeCategory.value),
)

const counts = computed(() => {
  const result: Partial<Record<ImageCategory | 'vse', number>> = { vse: galleryImages.length }
  for (const image of galleryImages) {
    result[image.category] = (result[image.category] ?? 0) + 1
  }
  return result
})
</script>

<template>
  <div>
    <PageHero
      title="Fotogalerie"
      subtitle="Chata je ideálním místem pro rodinnou dovolenou nebo romantický pobyt pro dva. Interiér chaty je moderně a útulně zařízen."
      :image="sectionBanners.fotogalerie"
    />

    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <GalleryFilter v-model="activeCategory" :counts="counts" />
      <div class="mt-8">
        <MasonryGallery :images="filtered" />
      </div>
    </section>
  </div>
</template>
