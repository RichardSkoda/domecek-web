import type { ContactFormPayload, FormSubmitResult } from '~/types/content'

export function useContactForm() {
  const { t } = useI18n()
  const pending = ref(false)
  const result = ref<FormSubmitResult | null>(null)
  const errorMessage = ref<string | null>(null)

  const resultMessage = computed(() => (result.value?.success ? t(`forms.success.${result.value.code}`) : null))

  async function submit(payload: ContactFormPayload) {
    pending.value = true
    errorMessage.value = null
    result.value = null

    try {
      result.value = await $fetch<FormSubmitResult>('/api/kontakt', {
        method: 'POST',
        body: payload,
      })
    } catch (error: any) {
      const code = error?.data?.data?.code ?? 'serverError'
      errorMessage.value = t(`forms.errors.${code}`)
    } finally {
      pending.value = false
    }
  }

  return { pending, result, resultMessage, errorMessage, submit }
}
