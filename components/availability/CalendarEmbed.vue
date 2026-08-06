<script setup lang="ts">
import { siteConfig } from '~/data/siteConfig'

const { t } = useI18n()
const { consent, accept } = useCookieConsent()
</script>

<template>
  <div>
    <div v-if="consent === 'accepted'" class="overflow-hidden rounded-xl2 ring-1 ring-sand-200">
      <iframe
        :src="siteConfig.googleCalendarEmbedUrl"
        :title="t('availability.embedTitle')"
        loading="lazy"
        class="h-[600px] w-full"
      />
    </div>
    <div
      v-else
      class="flex h-[600px] flex-col items-center justify-center gap-4 rounded-xl2 border border-dashed border-sand-300 bg-sand-100/50 p-8 text-center"
    >
      <p class="max-w-xs text-sm text-ink-700">{{ t('cookies.calendarBlocked') }}</p>
      <BaseButton @click="accept">{{ t('cookies.accept') }}</BaseButton>
    </div>
    <p class="mt-2 text-xs text-ink-700">
      {{ t('availability.fallbackNotice') }}
      <a :href="siteConfig.googleCalendarEmbedUrl" target="_blank" rel="noopener noreferrer" class="font-medium text-forest-700 hover:underline">
        {{ t('availability.openInNewWindow') }}
      </a>
    </p>
  </div>
</template>
