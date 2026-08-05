<script setup lang="ts">
import { sectionBanners } from '~/data/media'
import { siteConfig } from '~/data/siteConfig'

const { t } = useI18n()

definePageMeta({ i18n: { paths: { en: '/booking', de: '/reservierung' } } })

useSeoMeta({
  title: () => t('pages.rezervace.seo.title'),
  description: () => t('pages.rezervace.seo.description'),
})
</script>

<template>
  <div>
    <PageHero
      :title="t('pages.rezervace.hero.title')"
      :subtitle="t('pages.rezervace.hero.subtitle')"
      :image="sectionBanners.rezervace"
    />

    <section class="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p class="text-sm text-ink-700">
        {{ t('pages.rezervace.intro') }}
      </p>

      <div class="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink-700">
        <i18n-t keypath="pages.rezervace.phonePrompt" tag="p" scope="global">
          <template #phone>
            <a :href="`tel:${siteConfig.phoneHref}`" class="font-medium text-forest-700 hover:underline">{{ siteConfig.phone }}</a>
          </template>
        </i18n-t>
        <i18n-t keypath="pages.rezervace.emailPrompt" tag="p" scope="global">
          <template #email>
            <a :href="`mailto:${siteConfig.email}`" class="font-medium text-forest-700 hover:underline">{{ siteConfig.email }}</a>
          </template>
        </i18n-t>
      </div>

      <div class="mt-10">
        <BookingForm />
      </div>
    </section>
  </div>
</template>
