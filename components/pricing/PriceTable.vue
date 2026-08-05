<script setup lang="ts">
import { priceRows } from '~/data/pricing'

const { t, locale } = useI18n()
const { tr } = useTranslated()

const numberFormatLocale: Record<string, string> = { cs: 'cs-CZ', en: 'en-US', de: 'de-DE' }

function formatCzk(value: number) {
  return new Intl.NumberFormat(numberFormatLocale[locale.value] ?? 'cs-CZ').format(value) + ' Kč'
}
</script>

<template>
  <div class="overflow-hidden rounded-xl2 ring-1 ring-sand-200">
    <table class="w-full text-left text-sm">
      <thead class="bg-forest-700 text-sand-50">
        <tr>
          <th class="px-6 py-4 font-medium">{{ t('pricing.table.season') }}</th>
          <th class="px-6 py-4 font-medium">{{ t('pricing.table.unit') }}</th>
          <th class="px-6 py-4 text-right font-medium">{{ t('pricing.table.price') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-sand-200 bg-sand-50">
        <tr v-for="row in priceRows" :key="row.id">
          <td class="px-6 py-4 text-ink-800">{{ tr(row.translations) }}</td>
          <td class="px-6 py-4 text-ink-700">{{ t(`pricing.units.${row.unit}`) }}</td>
          <td class="px-6 py-4 text-right font-semibold text-ink-900">{{ formatCzk(row.priceCzk) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
