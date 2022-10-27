import useFetchAndLoad from 'hooks/useFetchAndLoad'
import useLocalStorage from 'hooks/useLocalStorage'
import { isEmpty } from 'lodash'
import { useEffect } from 'react'
import { LOCAL_STORAGE_KEYS } from 'utils/constants/localStorage.constants'

import { IBankData } from '../Banks.types'
import { loadBanks } from '../services/Banks.services'

const useBanks = () => {
  const [bankDataLocalStorage, setBankDataLocalStorage] = useLocalStorage(
    LOCAL_STORAGE_KEYS.BANK_DATA,
    [] as IBankData[]
  )

  const { loading, callEndpoint } = useFetchAndLoad()

  const fetchBanks = async () => {
    const bankApiData = await callEndpoint(loadBanks())
    setBankDataLocalStorage(bankApiData.data)
  }

  useEffect(() => {
    if (isEmpty(bankDataLocalStorage)) fetchBanks()
  }, [])

  return {
    bankData: bankDataLocalStorage as IBankData[],
    loading
  }
}

export default useBanks
