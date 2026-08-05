import type { BusyRange } from '~/types/content'

function toDayStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

export function useAvailability() {
  const { data } = useFetch<BusyRange[]>('/api/availability', { default: () => [] })

  const busyRanges = computed(() => (data.value ?? []).map((range) => ({ start: new Date(range.start), end: new Date(range.end) })))

  /** DTEND je v iCal exkluzivní (den odjezdu je volný pro nový příjezd). */
  function isDateBusy(date: Date): boolean {
    const day = toDayStart(date)
    return busyRanges.value.some((range) => day >= toDayStart(range.start) && day < toDayStart(range.end))
  }

  function rangeOverlapsBusy(start: Date, end: Date): boolean {
    const s = toDayStart(start)
    const e = toDayStart(end)
    return busyRanges.value.some((range) => s < toDayStart(range.end) && toDayStart(range.start) < e)
  }

  return { busyRanges, isDateBusy, rangeOverlapsBusy }
}
