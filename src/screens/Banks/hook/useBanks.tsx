import useBankContext from 'contexts/Banks/hook/useBankContext'
import useFetchAndLoad from 'hooks/useFetchAndLoad'
import useLocalStorage from 'hooks/useLocalStorage'
import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { LOCAL_STORAGE_KEYS } from 'utils/constants/localStorage.constants'

import { IBankData } from '../Banks.types'
import { loadBanks } from '../services/Banks.services'

const isFavoriteBank = (bank: IBankData, favoriteBanks: IBankData[]) =>
  favoriteBanks.some(favoriteBank => favoriteBank.bankName === bank.bankName)

const handleOnCardClick = (
  bank: IBankData,
  favoriteBanks: IBankData[],
  removeFavoriteBank: (arg0: IBankData) => any,
  setFavoriteBank: (arg0: IBankData) => any
) => {
  if (
    favoriteBanks?.some(
      (favoriteBank: { bankName: any }) =>
        favoriteBank.bankName === bank.bankName
    )
  )
    return removeFavoriteBank(bank)

  return setFavoriteBank(bank)
}

const useBanks = () => {
  const [bankDataLocalStorage, setBankDataLocalStorage] = useLocalStorage(
    LOCAL_STORAGE_KEYS.BANK_DATA,
    [] as IBankData[]
  )
  const { favoriteBanks, setFavoriteBank, removeFavoriteBank } =
    useBankContext()

  const [showFavorites, setShowFavorites] = useState(false)

  const { loading, callEndpoint } = useFetchAndLoad()

  const fetchBanks = async () => {
    const bankApiData = await callEndpoint(loadBanks())
    setBankDataLocalStorage(bankApiData.data)
  }

  useEffect(() => {
    if (isEmpty(bankDataLocalStorage)) fetchBanks()
  }, [])

  return {
    bankData: showFavorites
      ? favoriteBanks
      : (bankDataLocalStorage as IBankData[]),
    loading,
    favoriteBanks,
    setFavoriteBank,
    removeFavoriteBank,
    isFavoriteBank,
    handleOnCardClick,
    showFavorites,
    setShowFavorites
  }
}

export default useBanks
