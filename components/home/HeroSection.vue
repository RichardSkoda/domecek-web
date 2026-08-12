<script setup lang="ts">
import { homeHero, heroImageUrl } from '~/data/media'
import { siteConfig } from '~/data/siteConfig'

const { t } = useI18n()
const localePath = useLocalePath()
const { tr } = useTranslated()
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="relative h-[58vh] min-h-[400px] max-h-[600px] w-full bg-ink-900">
      <NuxtImg
        :src="heroImageUrl(homeHero)"
        :alt="tr(homeHero.translations)"
        :width="homeHero.width"
        :height="homeHero.height"
        class="absolute inset-0 h-full w-full object-cover"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
        loading="eager"
        fetchpriority="high"
        preload
      />
      <div class="absolute inset-0 bg-gradient-to-t from-ink-900/35 to-transparent" />
    </div>

    <div class="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div
        class="relative z-10 -mt-20 max-w-3xl rounded-2xl bg-ink-900/85 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-md sm:-mt-24 sm:p-10"
      >
        <p class="text-sm font-medium uppercase tracking-widest text-sand-100/90">{{ t('home.hero.eyebrow') }}</p>
        <h1 class="mt-3 font-display text-3xl font-semibold text-sand-50 sm:text-5xl">
          {{ tr(siteConfig.translations).tagline }}
        </h1>
        <p class="mt-4 text-lg text-sand-100/90">
          {{ t('home.hero.description') }}
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <BaseButton :to="localePath('/rezervace')">{{ t('home.hero.ctaPrimary') }}</BaseButton>
          <BaseButton :to="localePath('/fotogalerie')" variant="secondary">{{ t('home.hero.ctaSecondary') }}</BaseButton>
        </div>
      </div>
      <div class="h-8 sm:h-12" />
    </div>
  </section>
</template>
