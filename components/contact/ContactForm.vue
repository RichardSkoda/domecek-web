<script setup lang="ts">
const { pending, result, resultMessage, errorMessage, submit } = useContactForm()
const { t } = useI18n()

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
    <BaseField id="contact-name" v-model="form.name" :label="t('forms.contact.nameLabel')" required />
    <BaseField id="contact-email" v-model="form.email" type="email" :label="t('forms.contact.emailLabel')" required />
    <BaseField id="contact-message" v-model="form.message" as="textarea" :label="t('forms.contact.messageLabel')" required />

    <GdprCheckbox id="contact-gdpr" v-model="form.gdprConsent" />

    <div class="flex items-center gap-4">
      <BaseButton type="submit" :disabled="pending">
        {{ pending ? t('forms.contact.submitting') : t('forms.contact.submit') }}
      </BaseButton>
      <p v-if="result?.success" class="text-sm font-medium text-forest-700">{{ resultMessage }}</p>
      <p v-else-if="errorMessage" class="text-sm font-medium text-clay-600">{{ errorMessage }}</p>
    </div>
  </form>
</template>
