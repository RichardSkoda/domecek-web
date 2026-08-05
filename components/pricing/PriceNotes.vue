<script setup lang="ts">
import { priceNotes } from '~/data/pricing'

const { tr } = useTranslated()
</script>

<template>
  <ul class="mt-8 space-y-2">
    <li v-for="note in priceNotes" :key="note.id" class="flex items-start gap-2 text-sm text-ink-700">
      <svg viewBox="0 0 20 20" fill="currentColor" class="mt-0.5 h-4 w-4 shrink-0 text-forest-600">
        <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm.75 4a.75.75 0 00-1.5 0v4c0 .2.08.39.22.53l2.5 2.5a.75.75 0 101.06-1.06l-2.28-2.28V6z" clip-rule="evenodd" />
      </svg>
      {{ tr(note.translations) }}
    </li>
  </ul>
</template>
