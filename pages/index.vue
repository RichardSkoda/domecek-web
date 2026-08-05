<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('pages.home.seo.title'),
  description: () => t('pages.home.seo.description'),
  ogTitle: () => t('pages.home.seo.title'),
  ogDescription: () => t('pages.home.seo.ogDescription'),
  ogImage: '/images/hero/fotogalerie-037.webp',
})
</script>

<template>
  <div>
    <HeroSection />
    <IntroSection />
    <PetsNotice />
    <HighlightsGrid />
    <AmenitiesPreview />
    <SurroundingsSection />
    <GalleryPreview />
    <CtaBanner />
  </div>
</template>
