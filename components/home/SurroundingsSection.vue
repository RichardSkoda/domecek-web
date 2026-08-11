<script setup lang="ts">
import { surroundings } from '~/data/surroundings'
import { sectionImageUrl } from '~/data/media'

const { t } = useI18n()
const { tr } = useTranslated()
</script>

<template>
  <section class="bg-forest-900 py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <FadeIn>
        <SectionHeading
          :eyebrow="t('home.surroundings.eyebrow')"
          :title="t('home.surroundings.title')"
          align="center"
          class="[&_h2]:text-sand-50 [&_p]:text-sand-100/80"
        />
      </FadeIn>

      <div class="mt-14 grid gap-10 lg:grid-cols-3">
        <FadeIn v-for="(block, index) in surroundings" :key="block.id" :delay="index * 0.1">
          <article class="overflow-hidden rounded-xl2 bg-forest-800">
            <NuxtImg
              :src="sectionImageUrl(block.image)"
              :alt="tr(block.image.translations)"
              :width="block.image.width"
              :height="block.image.height"
              class="aspect-[4/3] w-full object-cover"
              sizes="sm:100vw lg:33vw"
              loading="lazy"
            />
            <div class="p-6">
              <h3 class="mt-1 font-display text-xl font-semibold text-sand-50">{{ tr(block.translations).title }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-sand-100/80">{{ tr(block.translations).body }}</p>
            </div>
          </article>
        </FadeIn>
      </div>
    </div>
  </section>
</template>
