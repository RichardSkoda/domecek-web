<script setup lang="ts">
import type { SectionImage } from '~/types/content'
import { sectionImageUrl } from '~/data/media'

const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    image: SectionImage
    /** Svislá pozice ořezu, např. '50%' (střed), '0%' (nahoře), '100%' (dole), nebo libovolná hodnota mezi. */
    imagePositionY?: string
  }>(),
  { imagePositionY: '50%' },
)

const { tr } = useTranslated()
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="relative h-[34vh] min-h-[260px] max-h-[380px] w-full bg-forest-900">
      <NuxtImg
        :src="sectionImageUrl(props.image)"
        :alt="tr(props.image.translations)"
        :width="props.image.width"
        :height="props.image.height"
        class="absolute inset-0 h-full w-full object-cover"
        :style="{ objectPosition: `50% ${props.imagePositionY}` }"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
    </div>

    <div class="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div class="relative z-10 -mt-14 inline-block max-w-2xl rounded-2xl bg-ink-900/85 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-md sm:-mt-16 sm:p-8">
        <h1 class="font-display text-3xl font-semibold text-sand-50 sm:text-5xl">{{ title }}</h1>
        <p v-if="subtitle" class="mt-3 max-w-xl text-lg text-sand-100/90">{{ subtitle }}</p>
      </div>
      <div class="h-8 sm:h-12" />
    </div>
  </section>
</template>
