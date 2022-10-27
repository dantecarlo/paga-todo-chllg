export interface ICardInterface {
  bankName: string
  age: number
  description: string
  url: string
  loading: boolean
  favorite?: boolean
  onClick?: () => void
}
