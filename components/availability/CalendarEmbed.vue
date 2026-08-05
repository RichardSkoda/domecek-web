<script setup lang="ts">
import { siteConfig } from '~/data/siteConfig'

const { t } = useI18n()
</script>

<template>
  <div>
    <div class="overflow-hidden rounded-xl2 ring-1 ring-sand-200">
      <iframe
        :src="siteConfig.googleCalendarEmbedUrl"
        :title="t('availability.embedTitle')"
        loading="lazy"
        class="h-[600px] w-full"
      />
    </div>
    <p class="mt-2 text-xs text-ink-700">
      {{ t('availability.fallbackNotice') }}
      <a :href="siteConfig.googleCalendarEmbedUrl" target="_blank" rel="noopener noreferrer" class="font-medium text-forest-700 hover:underline">
        {{ t('availability.openInNewWindow') }}
      </a>
    </p>
  </div>
</template>
