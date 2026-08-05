<script setup lang="ts">
import { sectionBanners } from '~/data/media'
import { siteConfig } from '~/data/siteConfig'

const { t } = useI18n()

definePageMeta({ i18n: { paths: { en: '/contact', de: '/kontakt' } } })

useSeoMeta({
  title: () => t('pages.kontakt.seo.title'),
  description: () =>
    t('pages.kontakt.seo.description', {
      street: siteConfig.address.street,
      zip: siteConfig.address.zip,
      city: siteConfig.address.city,
    }),
})
</script>

<template>
  <div>
    <PageHero :title="t('pages.kontakt.hero.title')" :subtitle="t('pages.kontakt.hero.subtitle')" :image="sectionBanners.kontakt" />

    <section class="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <ContactInfo />

      <hr class="my-14 border-sand-200">

      <SectionHeading :eyebrow="t('pages.kontakt.formEyebrow')" :title="t('pages.kontakt.formTitle')" />

      <div class="mt-8 grid gap-10 lg:grid-cols-2">
        <ContactForm />
        <MapEmbed />
      </div>

      <a
        :href="siteConfig.instagramUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-10 inline-flex items-center gap-2 text-sm font-medium text-forest-700 hover:text-forest-800"
      >
        {{ t('pages.kontakt.instagramText') }}
      </a>
    </section>
  </div>
</template>
