<script setup lang="ts">
import { equipmentGroups } from '~/data/equipment'
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <SectionHeading eyebrow="Praktické vybavení" title="Připraveno pro Váš pohodlný pobyt" align="center">
      Aby byl Váš pobyt co nejpohodlnější, připravili jsme na chatě běžné vybavení domácnosti. Nemusíte si tak vozit
      základní hygienické ani úklidové potřeby.
    </SectionHeading>

    <div class="mt-12 grid gap-8 sm:grid-cols-3">
      <div v-for="group in equipmentGroups" :key="group.id" class="rounded-xl2 bg-forest-50/60 p-6">
        <h3 class="text-sm font-semibold uppercase tracking-wide text-forest-700">{{ group.title }}</h3>
        <ul class="mt-4 space-y-2">
          <li v-for="item in group.items" :key="item" class="flex items-start gap-2 text-sm text-ink-700">
            <svg viewBox="0 0 20 20" fill="currentColor" class="mt-0.5 h-4 w-4 shrink-0 text-forest-600">
              <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L8 11.6l6.3-6.3a1 1 0 011.4 0z" clip-rule="evenodd" />
            </svg>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
