import type { BusyRange } from '~/types/content'

function toDayStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

export function useAvailability() {
  const { data } = useFetch<BusyRange[]>('/api/availability', { default: () => [] })

  /**
   * Celodenní (all-day) události mají DTEND v iCal už exkluzivní (Google Kalendář ho tak ukládá
   * automaticky – den odjezdu do rozsahu nepatří). U časovaných rezervací DTEND naopak označuje
   * skutečný okamžik odjezdu ten samý den, a protože nechceme stěhování ve stejný den, počítáme
   * je jako obsazené až do půlnoci (den odjezdu se tím efektivně taky zablokuje).
   */
  const busyRanges = computed(() =>
    (data.value ?? []).map((range) => {
      const end = new Date(range.end)
      if (!range.dateOnly) {
        end.setDate(end.getDate() + 1)
        end.setHours(0, 0, 0, 0)
      }
      return { start: new Date(range.start), end }
    }),
  )

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
