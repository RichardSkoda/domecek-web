import type { BusyRange } from '~/types/content'

function toDayStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

export function useAvailability() {
  const { data } = useFetch<BusyRange[]>('/api/availability', { default: () => [] })

  /**
   * DTEND je v kalendáři exkluzivní – den odjezdu je volný pro nový příjezd (běžné stěhování
   * ve stejný den). U celodenních událostí (vytvořených výběrem "od–do" v Google Kalendáři)
   * Google k zvolenému dni odjezdu při uložení automaticky přičte den navíc, takže je potřeba
   * ho o jeden den vrátit zpět. U časovaných rezervací (s konkrétním časem) k tomu nedochází.
   */
  const busyRanges = computed(() =>
    (data.value ?? []).map((range) => {
      const end = new Date(range.end)
      if (range.dateOnly) end.setDate(end.getDate() - 1)
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
