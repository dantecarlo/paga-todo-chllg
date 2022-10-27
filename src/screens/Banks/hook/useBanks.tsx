import useFetchAndLoad from 'hooks/useFetchAndLoad'
import { useEffect, useState } from 'react'

import { IBankData } from '../Banks.types'
import { loadBanks } from '../services/Banks.services'

const useBanks = () => {
  const [bankData, setBankData] = useState<IBankData[]>()

  const { loading, callEndpoint } = useFetchAndLoad()

  const fetchBanks = async () => {
    const bankApiData = await callEndpoint(loadBanks())
    setBankData(bankApiData.data)
  }

  useEffect(() => {
    fetchBanks()
  }, [])

  return {
    bankData,
    loading
  }
}

export default useBanks
