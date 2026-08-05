<script setup lang="ts">
const { pending, result, errorMessage, submit } = useBookingForm()

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
      <BaseField id="booking-name" v-model="form.name" label="Jméno a příjmení" required />
      <BaseField id="booking-phone" v-model="form.phone" type="tel" label="Telefonní číslo" required />
    </div>

    <BaseField id="booking-email" v-model="form.email" type="email" label="E-mail" required />

    <div class="grid gap-5 sm:grid-cols-2">
      <BaseField id="booking-dates" v-model="form.dateRange" label="Poptávaný termín" required />
      <BaseField id="booking-guests" v-model="form.guests" type="number" label="Počet osob" required />
    </div>

    <BaseField id="booking-message" v-model="form.message" as="textarea" label="Zpráva (nepovinné)" />

    <GdprCheckbox id="booking-gdpr" v-model="form.gdprConsent" />

    <div class="flex items-center gap-4">
      <BaseButton type="submit" :disabled="pending">
        {{ pending ? 'Odesílám…' : 'Odeslat poptávku' }}
      </BaseButton>
      <p v-if="result?.success" class="text-sm font-medium text-forest-700">{{ result.message }}</p>
      <p v-else-if="errorMessage" class="text-sm font-medium text-clay-600">{{ errorMessage }}</p>
    </div>
  </form>
</template>
