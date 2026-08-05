<script setup lang="ts">
import { amenities } from '~/data/amenities'
import { sectionBanners } from '~/data/media'

const { t } = useI18n()

definePageMeta({ i18n: { paths: { en: '/services', de: '/dienstleistungen' } } })

useSeoMeta({
  title: () => t('pages.sluzby.seo.title'),
  description: () => t('pages.sluzby.seo.description'),
  ogTitle: () => t('pages.sluzby.seo.title'),
})
</script>

<template>
  <div>
    <PageHero :title="t('pages.sluzby.hero.title')" :subtitle="t('pages.sluzby.hero.subtitle')" :image="sectionBanners.sluzby" />

    <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AmenityCard v-for="amenity in amenities" :key="amenity.id" :amenity="amenity" />
      </div>
    </section>

    <EquipmentChecklist />
  </div>
</template>
