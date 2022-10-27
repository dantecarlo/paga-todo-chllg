import Card from 'components/shared/Card'
import useBanks from 'screens/Banks/hook/useBanks'

import { StyledCardContainer, StyledContainer } from './Banks.styles'

const Banks = () => {
  const { bankData, loading } = useBanks()

  return (
    <StyledContainer>
      <StyledCardContainer>
        {bankData?.map(bank => (
          <Card
            age={bank.age}
            bankName={bank.bankName}
            description={bank.description}
            key={bank.bankName}
            loading={loading}
            url={bank.url}
          />
        ))}
      </StyledCardContainer>
    </StyledContainer>
  )
}

export default Banks
