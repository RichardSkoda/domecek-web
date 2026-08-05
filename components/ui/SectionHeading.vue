<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    align?: 'left' | 'center'
  }>(),
  { align: 'left' },
)
</script>

<template>
  <div :class="['max-w-2xl', align === 'center' ? 'mx-auto text-center' : '']">
    <p v-if="eyebrow" class="text-sm font-medium uppercase tracking-wide text-forest-600">{{ eyebrow }}</p>
    <h2 class="mt-2 text-3xl font-semibold text-ink-900 sm:text-4xl">{{ title }}</h2>
    <p v-if="$slots.default" class="mt-4 text-base text-ink-700">
      <slot />
    </p>
  </div>
</template>
