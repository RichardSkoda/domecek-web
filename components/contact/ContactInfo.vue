<script setup lang="ts">
import { siteConfig } from '~/data/siteConfig'

const { t } = useI18n()

const items = computed(() => [
  { icon: 'mail', label: t('contact.emailLabel'), value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: 'phone', label: t('contact.phoneLabel'), value: siteConfig.phone, href: `tel:${siteConfig.phoneHref}` },
  {
    icon: 'pin',
    label: t('contact.addressLabel'),
    value: `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`,
    href: siteConfig.googleMapsUrl,
  },
])
</script>

<template>
  <dl class="grid gap-4 sm:grid-cols-3">
    <div
      v-for="item in items"
      :key="item.label"
      class="flex items-start gap-4 rounded-xl2 bg-sand-50 p-5 shadow-sm ring-1 ring-sand-200"
    >
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
        <FeatureIcon :name="item.icon" />
      </span>
      <div class="min-w-0">
        <dt class="text-xs font-semibold uppercase tracking-wide text-forest-700">{{ item.label }}</dt>
        <dd class="mt-1">
          <a
            :href="item.href"
            :target="item.icon === 'pin' ? '_blank' : undefined"
            :rel="item.icon === 'pin' ? 'noopener noreferrer' : undefined"
            class="break-words text-sm font-medium text-ink-900 hover:text-forest-700"
          >
            {{ item.value }}
          </a>
        </dd>
      </div>
    </div>
  </dl>
</template>
