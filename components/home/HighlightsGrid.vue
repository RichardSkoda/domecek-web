<script setup lang="ts">
import { highlights } from '~/data/highlights'
</script>

<template>
  <section class="bg-forest-50/60 py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <FadeIn>
        <SectionHeading eyebrow="Hlavní výhody" title="Vše, co pro pohodlný pobyt potřebujete" align="center" />
      </FadeIn>

      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="item in highlights"
          :key="item.id"
          class="flex items-start gap-3 rounded-xl2 bg-sand-50 p-5 shadow-sm ring-1 ring-sand-200"
        >
          <FeatureIcon :name="item.icon" class="mt-0.5 shrink-0 text-forest-600" />
          <span class="text-sm font-medium text-ink-800">{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
