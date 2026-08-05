<script setup lang="ts">
import { navLinks, siteConfig } from '~/data/siteConfig'

const { t } = useI18n()
const localePath = useLocalePath()
const { tr } = useTranslated()
</script>

<template>
  <footer class="border-t border-sand-200 bg-sand-100/60">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
      <div>
        <p class="font-display text-lg font-semibold text-ink-900">Domeček Oseček</p>
        <p class="mt-3 max-w-xs text-sm text-ink-700">{{ tr(siteConfig.translations).tagline }}</p>
        <a
          :href="siteConfig.instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-forest-700 hover:text-forest-800"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="h-5 w-5">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
          </svg>
          {{ t('footer.instagramHandle') }}
        </a>
      </div>

      <div>
        <p class="text-sm font-semibold text-ink-900">{{ t('footer.quickLinks') }}</p>
        <ul class="mt-3 space-y-2">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink :to="localePath(link.to)" class="text-sm text-ink-700 hover:text-forest-700">{{ t(link.labelKey) }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <p class="text-sm font-semibold text-ink-900">{{ t('footer.contact') }}</p>
        <ul class="mt-3 space-y-2 text-sm text-ink-700">
          <li>{{ siteConfig.address.street }}, {{ siteConfig.address.zip }} {{ siteConfig.address.city }}</li>
          <li>
            <a :href="`tel:${siteConfig.phoneHref}`" class="hover:text-forest-700">{{ siteConfig.phone }}</a>
          </li>
          <li>
            <a :href="`mailto:${siteConfig.email}`" class="hover:text-forest-700">{{ siteConfig.email }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-sand-200 px-4 py-6 text-center text-xs text-ink-700/70 sm:px-6">
      {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
    </div>
  </footer>
</template>
