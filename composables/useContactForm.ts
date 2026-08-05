import type { ContactFormPayload, FormSubmitResult } from '~/types/content'

export function useContactForm() {
  const pending = ref(false)
  const result = ref<FormSubmitResult | null>(null)
  const errorMessage = ref<string | null>(null)

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
      errorMessage.value = error?.data?.statusMessage ?? 'Odeslání se nezdařilo, zkuste to prosím znovu.'
    } finally {
      pending.value = false
    }
  }

  return { pending, result, errorMessage, submit }
}
