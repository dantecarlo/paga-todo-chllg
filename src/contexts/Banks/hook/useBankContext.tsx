import { IBankData } from 'screens/Banks/Banks.types'

import { bankActions } from '../Bank.context.types'
import { useContextDispatch, useStateDispatch } from '../Bank.contextProvider'

const useBankContext = () => {
  const favoriteBanks = useStateDispatch()

  const dispatch = useContextDispatch()

  const setFavoriteBank = (newBank: IBankData) => {
    dispatch({
      type: bankActions.SET_FAVORITE_BANK,
      payload: newBank
    })
  }

  const removeFavoriteBank = (removeBank: IBankData) => {
    dispatch({
      type: bankActions.REMOVE_FAVORITE_BANK,
      payload: removeBank
    })
  }

  return {
    favoriteBanks,
    setFavoriteBank,
    removeFavoriteBank
  }
}

export default useBankContext
