<script setup lang="ts">
import { siteConfig } from '~/data/siteConfig'

useSchemaOrg([
  defineLocalBusiness({
    '@type': 'LodgingBusiness',
    name: siteConfig.name,
    description: siteConfig.tagline,
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    address: {
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressCountry: 'CZ',
    },
    image: '/images/hero/fotogalerie-037.webp',
    sameAs: [siteConfig.instagramUrl],
  }),
])
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
