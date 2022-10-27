import { IBankData } from '../Banks.types'

export const bankDataAdapter = (bankData: IBankData) => {
  const { bankName, age, description, url } = bankData

  return {
    bankName,
    age,
    description,
    url
  }
}
