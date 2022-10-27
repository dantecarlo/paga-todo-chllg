import { IBankData } from 'screens/Banks/Banks.types'

import { bankActions, IBankAction } from '../Bank.context.types'

export const initialFavoriteBankState = [] as IBankData[]

const bankReducer = (state: IBankData[], action: IBankAction): IBankData[] => {
  switch (action.type) {
    case bankActions.SET_FAVORITE_BANK:
      return [...state, action.payload]

    case bankActions.REMOVE_FAVORITE_BANK:
      return state.filter(bank => bank.bankName !== action.payload.bankName)

    default:
      return state
  }
}

export default bankReducer
