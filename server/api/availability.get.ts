import ical from 'node-ical'
import { siteConfig } from '~/data/siteConfig'
import type { BusyRange } from '~/types/content'

export default defineCachedEventHandler(
  async (): Promise<BusyRange[]> => {
    const data = await ical.async.fromURL(siteConfig.googleCalendarIcsUrl)

    const ranges: BusyRange[] = []
    for (const component of Object.values(data)) {
      if (!component || component.type !== 'VEVENT' || !component.end) continue
      ranges.push({
        start: new Date(component.start).toISOString(),
        end: new Date(component.end).toISOString(),
        dateOnly: !!component.end.dateOnly,
      })
    }
    return ranges
  },
  { maxAge: 300 },
)
