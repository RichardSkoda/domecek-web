<script setup lang="ts">
import { sectionBanners, sectionImageUrl } from '~/data/media'

const { t } = useI18n()
const localePath = useLocalePath()

definePageMeta({ i18n: { paths: { en: '/availability', de: '/verfuegbarkeit' } } })

useSeoMeta({
  title: () => t('pages.obsazenost.seo.title'),
  description: () => t('pages.obsazenost.seo.description'),
  ogImage: sectionImageUrl(sectionBanners.obsazenost),
})
</script>

<template>
  <div>
    <PageHero :title="t('pages.obsazenost.hero.title')" :image="sectionBanners.obsazenost" image-position-y="80%" />

    <section class="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <CalendarEmbed />
      <i18n-t keypath="pages.obsazenost.contactPrompt" tag="p" scope="global" class="mt-6 text-center text-sm text-ink-700">
        <template #link>
          <NuxtLink :to="localePath('/kontakt')" class="font-medium text-forest-700 hover:underline">{{ t('pages.obsazenost.contactLinkText') }}</NuxtLink>
        </template>
      </i18n-t>
    </section>
  </div>
</template>
