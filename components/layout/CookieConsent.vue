<script setup lang="ts">
const { consent, accept, reject } = useCookieConsent()
const { t } = useI18n()
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="consent === null"
      role="dialog"
      aria-live="polite"
      :aria-label="t('cookies.title')"
      class="fixed inset-x-0 bottom-0 z-[200] border-t border-sand-200 bg-sand-50/98 px-4 py-5 shadow-[0_-4px_24px_rgba(28,26,22,0.12)] backdrop-blur sm:px-6"
    >
      <div class="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-ink-700">
          {{ t('cookies.message') }}
        </p>
        <div class="flex shrink-0 flex-wrap gap-3">
          <BaseButton variant="secondary" @click="reject">{{ t('cookies.reject') }}</BaseButton>
          <BaseButton @click="accept">{{ t('cookies.accept') }}</BaseButton>
        </div>
      </div>
    </div>
  </Transition>
</template>
