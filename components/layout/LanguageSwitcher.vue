<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const codeLabel: Record<string, string> = { cs: 'CZ', en: 'EN', de: 'DE' }

const availableLocales = computed(() =>
  (locales.value as { code: 'cs' | 'en' | 'de' }[]).map((l) => ({ code: l.code, path: switchLocalePath(l.code) })),
)
</script>

<template>
  <nav :aria-label="t('header.languageSwitcherLabel')" class="flex items-center gap-1.5 text-sm">
    <template v-for="(loc, index) in availableLocales" :key="loc.code">
      <NuxtLink
        :to="loc.path"
        :aria-current="loc.code === locale ? 'true' : undefined"
        class="rounded px-1 font-medium transition-colors"
        :class="loc.code === locale ? 'text-forest-700' : 'text-slate-500 hover:text-forest-700'"
      >
        {{ codeLabel[loc.code] }}
      </NuxtLink>
      <span v-if="index < availableLocales.length - 1" class="text-sand-300" aria-hidden="true">|</span>
    </template>
  </nav>
</template>
