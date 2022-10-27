import { IBankData } from 'screens/Banks/Banks.types'

export interface IContextProvider {
  children?: React.ReactNode
}

export interface IBankAction {
  type: string
  payload: IBankData
}

export const bankActions = {
  SET_FAVORITE_BANK: 'SET_FAVORITE_BANK',
  REMOVE_FAVORITE_BANK: 'REMOVE_FAVORITE_BANK'
}
