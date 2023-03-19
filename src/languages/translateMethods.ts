/* eslint-disable @typescript-eslint/no-var-requires */
import { I18n } from 'i18n-js'
import { getStorageItem } from '@storage'

export const i18n = new I18n()

export const findBestAvailableLanguage = (): Languages => {
  const lang: Languages = navigator.language as any

  const availableLanguage: Languages[] = ['ru', 'en']

  if (availableLanguage.includes(lang)) {
    return lang
  }

  return 'ru'
}

export const setI18nConfig = (language: string) => {
  const languageTag = language || findBestAvailableLanguage()

  const isDev = process.env['NODE_ENV'] === 'development'

  let dictionary
  if (language === 'ru') {
    dictionary = isDev
      ? { ru: require('./dictionary/ru').default }
      : require('./dictionary/ruJson.json')
  }

  if (language === 'en') {
    dictionary = isDev
      ? { en: require('./dictionary/en').default }
      : require('./dictionary/enJson.json')
  }

  i18n.store(dictionary)

  i18n.locale = languageTag
}

setTimeout(
  setI18nConfig,
  0,
  getStorageItem('@userLanguage') || findBestAvailableLanguage(),
)
