import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Card from 'components/shared/Card'
import useBanks from 'screens/Banks/hook/useBanks'

import {
  StyledCardContainer,
  StyledContainer,
  StyledFavoriteContainer,
  StyledHeartIcon
} from './Banks.styles'

const Banks = () => {
  const {
    bankData,
    loading,
    favoriteBanks,
    setFavoriteBank,
    removeFavoriteBank,
    isFavoriteBank,
    handleOnCardClick,
    showFavorites,
    setShowFavorites
  } = useBanks()

  return (
    <StyledContainer>
      <StyledFavoriteContainer
        onClick={() => {
          setShowFavorites(prev => !prev)
        }}
      >
        <StyledHeartIcon icon={showFavorites ? faHeart : faHeartRegular} />
      </StyledFavoriteContainer>
      <StyledCardContainer>
        {bankData?.map(bank => (
          <Card
            age={bank.age}
            bankName={bank.bankName}
            description={bank.description}
            favorite={isFavoriteBank(bank, favoriteBanks)}
            key={bank.bankName}
            loading={loading}
            url={bank.url}
            onClick={() =>
              handleOnCardClick(
                bank,
                favoriteBanks,
                removeFavoriteBank,
                setFavoriteBank
              )
            }
          />
        ))}
      </StyledCardContainer>
    </StyledContainer>
  )
}

export default Banks
