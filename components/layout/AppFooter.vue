<script setup lang="ts">
import { instagramBadge, sectionImageUrl } from '~/data/media'
import { navLinks, siteConfig } from '~/data/siteConfig'

const { t } = useI18n()
const localePath = useLocalePath()
const { tr } = useTranslated()
const { reset: resetCookieConsent } = useCookieConsent()
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
          class="mt-4 inline-block transition-opacity hover:opacity-90"
        >
          <NuxtImg
            :src="sectionImageUrl(instagramBadge)"
            :alt="t('footer.instagramHandle')"
            :width="instagramBadge.width"
            :height="instagramBadge.height"
            class="h-auto w-36"
            loading="lazy"
          />
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
      <button type="button" class="ml-2 underline hover:text-forest-700" @click="resetCookieConsent">
        {{ t('cookies.manage') }}
      </button>
    </div>
  </footer>
</template>
