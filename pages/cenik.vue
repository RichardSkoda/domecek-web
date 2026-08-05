<script setup lang="ts">
import { sectionBanners } from '~/data/media'

const { t } = useI18n()
const localePath = useLocalePath()

definePageMeta({ i18n: { paths: { en: '/pricing', de: '/preise' } } })

useSeoMeta({
  title: () => t('pages.cenik.seo.title'),
  description: () => t('pages.cenik.seo.description'),
})
</script>

<template>
  <div>
    <PageHero :title="t('pages.cenik.hero.title')" :subtitle="t('pages.cenik.hero.subtitle')" :image="sectionBanners.cenik" />

    <section class="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <PriceTable />
      <PriceNotes />

      <div class="mt-10">
        <BaseButton :to="localePath('/rezervace')">{{ t('pages.cenik.cta') }}</BaseButton>
      </div>
    </section>
  </div>
</template>
