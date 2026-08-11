<script setup lang="ts">
import { siteConfig } from '~/data/siteConfig'

const { tr } = useTranslated()
const head = useLocaleHead()
useHead(head)

const { color } = useThemeColor()
const themeColorStyle = computed(() => {
  const scale = generateForestRgbScale(color.value)
  const vars = FOREST_SHADES.map((shade) => `--forest-${shade}:${scale[shade]};`).join('')
  return `:root{${vars}}`
})
useHead({
  style: [{ key: 'theme-color-vars', innerHTML: themeColorStyle }],
})

useSchemaOrg([
  defineLocalBusiness({
    '@type': 'LodgingBusiness',
    name: siteConfig.name,
    description: tr(siteConfig.translations).tagline,
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
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
