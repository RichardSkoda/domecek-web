<script setup lang="ts">
import { VueDatePicker } from '@vuepic/vue-datepicker'
import { cs, de, enUS } from 'date-fns/locale'

const props = defineProps<{
  modelValue: string
  label: string
  required?: boolean
}>()

const emit = defineEmits<{ 'update:modelValue': [string] }>()

const { t, locale } = useI18n()
const { isDateBusy, rangeOverlapsBusy } = useAvailability()

const dateFnsLocales = { cs, en: enUS, de }
const dateFnsLocale = computed(() => dateFnsLocales[locale.value as keyof typeof dateFnsLocales] ?? cs)

const selectedRange = ref<[Date, Date] | null>(null)
const conflict = ref(false)
const minDate = new Date()

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  return `${day}.${month}.${date.getFullYear()}`
}

function formatInputValue(value: Date | Date[]) {
  if (!Array.isArray(value)) return formatDate(value)
  const [start, end] = value
  if (!start) return ''
  return end ? `${formatDate(start)} – ${formatDate(end)}` : formatDate(start)
}

watch(selectedRange, (value) => {
  if (!value || !value[0] || !value[1]) {
    conflict.value = false
    if (props.modelValue) emit('update:modelValue', '')
    return
  }

  const hasConflict = rangeOverlapsBusy(value[0], value[1])
  conflict.value = hasConflict
  emit('update:modelValue', hasConflict ? '' : `${formatDate(value[0])} – ${formatDate(value[1])}`)
})

watch(
  () => props.modelValue,
  (value) => {
    if (!value) {
      selectedRange.value = null
      conflict.value = false
    }
  },
)

defineExpose({ hasConflict: computed(() => conflict.value) })
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-ink-800">
      {{ label }}<span v-if="required" class="text-clay-500"> *</span>
    </label>
    <VueDatePicker
      v-model="selectedRange"
      class="mt-2 booking-date-picker"
      :range="{ noDisabledRange: true }"
      :time-config="{ enableTimePicker: false }"
      :min-date="minDate"
      :disabled-dates="isDateBusy"
      :multi-calendars="2"
      :locale="dateFnsLocale"
      :formats="{ input: formatInputValue }"
      :placeholder="t('forms.booking.datesPlaceholder')"
    />
    <p v-if="conflict" class="mt-2 text-sm font-medium text-clay-600">{{ t('forms.booking.datesConflict') }}</p>
  </div>
</template>
