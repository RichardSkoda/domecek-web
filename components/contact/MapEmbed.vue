<script setup lang="ts">
import { siteConfig } from '~/data/siteConfig'

const { t } = useI18n()
</script>

<template>
  <div>
    <div class="overflow-hidden rounded-xl2 ring-1 ring-sand-200">
      <iframe
        :src="siteConfig.googleMapsEmbedUrl"
        :title="t('contact.mapTitle')"
        loading="lazy"
        class="h-[400px] w-full"
      />
    </div>
    <p class="mt-2 text-xs text-ink-700">
      {{ t('contact.mapFallback') }}
      <a :href="siteConfig.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="font-medium text-forest-700 hover:underline">
        {{ t('contact.mapOpenLink') }}
      </a>
    </p>
  </div>
</template>
