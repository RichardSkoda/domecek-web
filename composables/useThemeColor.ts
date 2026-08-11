const STORAGE_KEY = 'domecek-theme-color'

/**
 * Umožňuje návštěvníkovi dočasně přeladit hlavní (forest) barvu webu podle
 * svého vkusu. Ukládá se jen v localStorage prohlížeče – netýká se tedy
 * ostatních návštěvníků ani souhlasu s cookies, viz useCookieConsent().
 */
export function useThemeColor() {
  const color = useLocalStorage<string>(STORAGE_KEY, DEFAULT_FOREST_COLOR)

  function setColor(hex: string) {
    if (isValidHexColor(hex)) color.value = hex
  }

  function resetColor() {
    color.value = DEFAULT_FOREST_COLOR
  }

  return { color, setColor, resetColor, defaultColor: DEFAULT_FOREST_COLOR }
}
