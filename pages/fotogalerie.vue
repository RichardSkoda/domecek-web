<script setup lang="ts">
import type { ImageCategory } from '~/types/content'
import { galleryImages } from '~/data/gallery'
import { sectionBanners } from '~/data/media'

const { t } = useI18n()

definePageMeta({ i18n: { paths: { en: '/gallery', de: '/galerie' } } })

useSeoMeta({
  title: () => t('pages.fotogalerie.seo.title'),
  description: () => t('pages.fotogalerie.seo.description'),
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
      :title="t('pages.fotogalerie.hero.title')"
      :subtitle="t('pages.fotogalerie.hero.subtitle')"
      :image="sectionBanners.fotogalerie"
      :image-position-y="'70%'"
    />

    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <GalleryFilter v-model="activeCategory" :counts="counts" />
      <div class="mt-8">
        <MasonryGallery :images="filtered" />
      </div>
    </section>
  </div>
</template>
