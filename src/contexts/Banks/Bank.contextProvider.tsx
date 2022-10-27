import { createContext, FC, useContext, useReducer } from 'react'
import { IBankData } from 'screens/Banks/Banks.types'

import { IBankAction, IContextProvider } from './Bank.context.types'
import bankReducer, { initialFavoriteBankState } from './reducers/banksReducer'

export const DispatchContext = createContext<React.Dispatch<IBankAction>>(
  () => {}
)
export const StateContext = createContext<IBankData[]>(initialFavoriteBankState)

export const BankContextProvider: FC<IContextProvider> = ({
  children = []
}) => {
  const [state, dispatch] = useReducer(bankReducer, initialFavoriteBankState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const useContextDispatch = () => useContext(DispatchContext)
export const useStateDispatch = () => useContext(StateContext)
