<script setup lang="ts">
import { amenities } from '~/data/amenities'

const preview = amenities.slice(0, 4)
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <SectionHeading eyebrow="Vybavení" title="Zařízení chaty" />
      <BaseButton to="/sluzby" variant="ghost">Veškeré vybavení →</BaseButton>
    </div>

    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="item in preview"
        :key="item.id"
        class="rounded-xl2 bg-forest-700 p-6 text-sand-50 shadow-sm"
      >
        <FeatureIcon :name="item.icon" class="h-7 w-7 text-sand-100" />
        <h3 class="mt-4 text-base font-semibold">{{ item.title }}</h3>
        <p class="mt-2 text-sm text-sand-100/85">{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>
