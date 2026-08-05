<script setup lang="ts">
import { siteConfig } from '~/data/siteConfig'
</script>

<template>
  <div>
    <div class="overflow-hidden rounded-xl2 ring-1 ring-sand-200">
      <iframe
        :src="siteConfig.googleMapsEmbedUrl"
        title="Mapa — Domeček Oseček"
        loading="lazy"
        class="h-[400px] w-full"
      />
    </div>
    <p class="mt-2 text-xs text-ink-700">
      Mapa se nenačetla?
      <a :href="siteConfig.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="font-medium text-forest-700 hover:underline">
        Otevřít v Google Mapách
      </a>
    </p>
  </div>
</template>
