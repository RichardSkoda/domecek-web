<script setup lang="ts">
import type { ImageCategory } from '~/types/content'
import { galleryCategoryLabels, galleryCategoryOrder } from '~/data/galleryCategories'

const props = defineProps<{
  modelValue: ImageCategory | 'vse'
  counts: Partial<Record<ImageCategory | 'vse', number>>
}>()

const emit = defineEmits<{ 'update:modelValue': [ImageCategory | 'vse'] }>()

const options: Array<{ value: ImageCategory | 'vse'; label: string }> = [
  { value: 'vse', label: 'Vše' },
  ...galleryCategoryOrder.map((value) => ({ value, label: galleryCategoryLabels[value] })),
]
</script>

<template>
  <div class="flex flex-wrap gap-2" role="group" aria-label="Filtrovat fotografie podle kategorie">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="rounded-full px-4 py-2 text-sm font-medium transition-colors"
      :class="
        props.modelValue === option.value
          ? 'bg-forest-700 text-sand-50'
          : 'bg-sand-100 text-ink-700 hover:bg-sand-200'
      "
      :aria-pressed="props.modelValue === option.value"
      @click="emit('update:modelValue', option.value)"
    >
      {{ option.label }}
      <span v-if="props.counts[option.value]" class="ml-1 opacity-70">({{ props.counts[option.value] }})</span>
    </button>
  </div>
</template>
