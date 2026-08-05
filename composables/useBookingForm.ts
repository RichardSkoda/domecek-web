import type { BookingFormPayload, FormSubmitResult } from '~/types/content'

export function useBookingForm() {
  const pending = ref(false)
  const result = ref<FormSubmitResult | null>(null)
  const errorMessage = ref<string | null>(null)

  async function submit(payload: BookingFormPayload) {
    pending.value = true
    errorMessage.value = null
    result.value = null

    try {
      result.value = await $fetch<FormSubmitResult>('/api/rezervace', {
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
