import { createI18n } from 'next-international'

export const { useI18n, useScopedI18n, I18nProvider } = createI18n({
  pt: () => import('./locales/pt.json'),
  en: () => import('./locales/en.json'),
  es: () => import('./locales/es.json')
})

export const defaultLocale = 'pt'
export const locales = ['pt', 'en', 'es']

export const localeNames = {
  pt: 'Português',
  en: 'English',
  es: 'Español'
}

export const getLocaleFromPath = (path: string) => {
  const locale = path.split('/')[1]
  return locales.includes(locale) ? locale : defaultLocale
}

export const removeLocaleFromPath = (path: string) => {
  const segments = path.split('/')
  const locale = segments[1]
  return locales.includes(locale)
    ? '/' + segments.slice(2).join('/')
    : path
}

export const addLocaleToPath = (path: string, locale: string) => {
  const cleanPath = removeLocaleFromPath(path)
  return `/${locale}${cleanPath}`
}

// Middleware para detectar idioma
export const i18nMiddleware = async (req: Request) => {
  const url = new URL(req.url)
  const locale = getLocaleFromPath(url.pathname)

  // Se não houver locale na URL, redirecionar para o locale padrão
  if (!locale) {
    const preferredLocale = req.headers.get('accept-language')?.split(',')[0].split('-')[0] || defaultLocale
    const targetLocale = locales.includes(preferredLocale) ? preferredLocale : defaultLocale
    return Response.redirect(new URL(addLocaleToPath(url.pathname, targetLocale), req.url))
  }

  return null
} 