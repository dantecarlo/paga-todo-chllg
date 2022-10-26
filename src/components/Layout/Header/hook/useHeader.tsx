import { useTranslation } from 'react-i18next'

const useHeader = () => {
  const { t } = useTranslation('global')

  return { t }
}

export default useHeader
