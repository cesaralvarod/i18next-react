import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const userLang = navigator.language || navigator.userLanguage
const defaultLocale = userLang.substring(0, 2)

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: {
          title: 'Welcome {{name}}',
        },
        modify_lang: 'Modify language:',
        lang: 'Language {{lang}}',
      },
    },
    es: {
      translation: {
        welcome: {
          title: 'Bienvenido {{name}}',
        },
        modify_lang: 'Modifica el idioma:',
        lang: 'Idioma {{lang}}',
      },
    },
  },
  lng: defaultLocale,
  fallbackLng: 'es',

  interpolation: {
    escapeValue: true,
  },
})
