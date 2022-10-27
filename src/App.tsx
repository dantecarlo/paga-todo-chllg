import { BankContextProvider } from 'contexts/Banks/Bank.contextProvider'
import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ROUTES } from 'utils/constants/navigation.constants'

const Banks = lazy(() => import('screens/Banks'))

const App = () => {
  const { banks } = ROUTES

  return (
    <BankContextProvider>
      <Routes>
        <Route index element={<Navigate to={banks} />} />
        <Route element={<Banks />} path={banks} />
      </Routes>
    </BankContextProvider>
  )
}

export default App
