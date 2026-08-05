<script setup lang="ts">
import { sectionBanners, sectionImageUrl } from '~/data/media'

const image = sectionBanners.intro
const { t } = useI18n()
const localePath = useLocalePath()
const { tr } = useTranslated()
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <SectionHeading :eyebrow="t('home.intro.eyebrow')" :title="t('home.intro.title')">
          {{ t('home.intro.body1') }}
        </SectionHeading>

        <p class="mt-4 text-base text-ink-700">
          {{ t('home.intro.body2') }}
        </p>

        <div class="mt-8">
          <BaseButton :to="localePath('/cenik')" variant="ghost">{{ t('home.intro.cta') }}</BaseButton>
        </div>
      </div>

      <NuxtImg
        :src="sectionImageUrl(image)"
        :alt="tr(image.translations)"
        :width="image.width"
        :height="image.height"
        class="aspect-[4/3] w-full rounded-xl2 object-cover shadow-lg"
        sizes="sm:100vw lg:40vw"
        loading="lazy"
      />
    </div>
  </section>
</template>
