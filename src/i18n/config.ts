import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { INITIAL_LANGUAGE } from 'utils/constants/i18n.constants'

import es from './es.json'

i18n.use(initReactI18next).init({
  fallbackLng: ['esES'],
  interpolation: {
    escapeValue: false
  },
  lng: INITIAL_LANGUAGE,
  resources: {
    esES: { global: es }
  }
})

i18n.languages = ['esES']
export default i18n
