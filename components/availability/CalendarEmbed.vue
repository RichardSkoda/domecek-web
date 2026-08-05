<script setup lang="ts">
import { siteConfig } from '~/data/siteConfig'
</script>

<template>
  <div>
    <div class="overflow-hidden rounded-xl2 ring-1 ring-sand-200">
      <iframe
        :src="siteConfig.googleCalendarEmbedUrl"
        title="Kalendář volných termínů Domeček Oseček"
        loading="lazy"
        class="h-[600px] w-full"
      />
    </div>
    <p class="mt-2 text-xs text-ink-700">
      Kalendář se nenačetl? Prohlížeč mohl zablokovat vložený obsah Google (typicky Firefox s aktivní ochranou proti
      sledování).
      <a :href="siteConfig.googleCalendarEmbedUrl" target="_blank" rel="noopener noreferrer" class="font-medium text-forest-700 hover:underline">
        Otevřít kalendář v novém okně
      </a>
    </p>
  </div>
</template>
