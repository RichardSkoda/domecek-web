<script setup lang="ts">
const { color, setColor, resetColor, defaultColor } = useThemeColor()
const { t } = useI18n()

const hexDraft = ref(color.value)
watch(color, (value) => {
  hexDraft.value = value
})

function onPickerInput(event: Event) {
  setColor((event.target as HTMLInputElement).value)
}

function onHexInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  hexDraft.value = value
  if (isValidHexColor(value)) setColor(value)
}

const isDefault = computed(() => color.value.toLowerCase() === defaultColor.toLowerCase())
</script>

<template>
  <div class="mt-10 rounded-xl2 bg-sand-50 p-5 ring-1 ring-sand-200">
    <p class="text-xs font-semibold uppercase tracking-wide text-forest-700">
      {{ t('contact.themeColorLabel') }}
    </p>
    <p class="mt-1 text-sm text-ink-800">
      {{ t('contact.themeColorHint') }}
    </p>

    <div class="mt-3 flex flex-wrap items-center gap-3">
      <input
        type="color"
        :value="color"
        class="h-10 w-14 cursor-pointer rounded-lg border border-sand-300 bg-transparent p-1"
        :aria-label="t('contact.themeColorLabel')"
        @input="onPickerInput"
      >
      <input
        type="text"
        :value="hexDraft"
        maxlength="7"
        class="w-28 rounded-lg border border-sand-300 bg-white px-3 py-2 text-sm text-ink-900 shadow-sm focus:border-forest-600 focus:outline-none focus:ring-1 focus:ring-forest-600"
        :aria-label="t('contact.themeColorLabel')"
        @input="onHexInput"
      >
      <button
        v-if="!isDefault"
        type="button"
        class="text-sm font-medium text-forest-700 hover:text-forest-900 hover:underline"
        @click="resetColor"
      >
        {{ t('contact.themeColorReset') }}
      </button>
    </div>
  </div>
</template>
