<script setup lang="ts">
const { pending, result, errorMessage, submit } = useContactForm()

const form = reactive({
  name: '',
  email: '',
  message: '',
  gdprConsent: false,
})

async function onSubmit() {
  await submit({ ...form })
  if (result.value?.success) {
    form.name = ''
    form.email = ''
    form.message = ''
    form.gdprConsent = false
  }
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="onSubmit">
    <BaseField id="contact-name" v-model="form.name" label="Jméno a příjmení" required />
    <BaseField id="contact-email" v-model="form.email" type="email" label="E-mail" required />
    <BaseField id="contact-message" v-model="form.message" as="textarea" label="Zpráva" required />

    <GdprCheckbox id="contact-gdpr" v-model="form.gdprConsent" />

    <div class="flex items-center gap-4">
      <BaseButton type="submit" :disabled="pending">
        {{ pending ? 'Odesílám…' : 'Odeslat zprávu' }}
      </BaseButton>
      <p v-if="result?.success" class="text-sm font-medium text-forest-700">{{ result.message }}</p>
      <p v-else-if="errorMessage" class="text-sm font-medium text-clay-600">{{ errorMessage }}</p>
    </div>
  </form>
</template>
