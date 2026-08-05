<script setup lang="ts">
import type { Amenity } from '~/types/content'

defineProps<{ amenity: Amenity }>()
</script>

<template>
  <article class="rounded-xl2 bg-sand-50 p-6 shadow-sm ring-1 ring-sand-200">
    <span class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest-100 text-forest-700">
      <FeatureIcon :name="amenity.icon" />
    </span>
    <h3 class="mt-4 text-base font-semibold text-ink-900">{{ amenity.title }}</h3>
    <p class="mt-2 text-sm leading-relaxed text-ink-700">{{ amenity.description }}</p>
  </article>
</template>
