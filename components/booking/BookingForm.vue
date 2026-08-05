<script setup lang="ts">
const { pending, result, resultMessage, errorMessage, submit } = useBookingForm()
const { t } = useI18n()

const form = reactive({
  name: '',
  phone: '',
  email: '',
  dateRange: '',
  guests: 2,
  message: '',
  gdprConsent: false,
})

async function onSubmit() {
  await submit({ ...form })
  if (result.value?.success) {
    form.name = ''
    form.phone = ''
    form.email = ''
    form.dateRange = ''
    form.guests = 2
    form.message = ''
    form.gdprConsent = false
  }
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="onSubmit">
    <div class="grid gap-5 sm:grid-cols-2">
      <BaseField id="booking-name" v-model="form.name" :label="t('forms.booking.nameLabel')" required />
      <BaseField id="booking-phone" v-model="form.phone" type="tel" :label="t('forms.booking.phoneLabel')" required />
    </div>

    <BaseField id="booking-email" v-model="form.email" type="email" :label="t('forms.booking.emailLabel')" required />

    <div class="grid gap-5 sm:grid-cols-2">
      <BaseField id="booking-dates" v-model="form.dateRange" :label="t('forms.booking.datesLabel')" required />
      <BaseField id="booking-guests" v-model="form.guests" type="number" :label="t('forms.booking.guestsLabel')" required />
    </div>

    <BaseField id="booking-message" v-model="form.message" as="textarea" :label="t('forms.booking.messageLabel')" />

    <GdprCheckbox id="booking-gdpr" v-model="form.gdprConsent" />

    <div class="flex items-center gap-4">
      <BaseButton type="submit" :disabled="pending">
        {{ pending ? t('forms.booking.submitting') : t('forms.booking.submit') }}
      </BaseButton>
      <p v-if="result?.success" class="text-sm font-medium text-forest-700">{{ resultMessage }}</p>
      <p v-else-if="errorMessage" class="text-sm font-medium text-clay-600">{{ errorMessage }}</p>
    </div>
  </form>
</template>
