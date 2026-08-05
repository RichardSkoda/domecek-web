import type { Locale, Localized } from '~/types/content'

export function useTranslated() {
  const { locale } = useI18n()

  function tr<T>(translations: Localized<T>): T {
    return translations[locale.value as Locale] ?? translations.cs
  }

  return { tr }
}
