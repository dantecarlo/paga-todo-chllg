import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import LoadingSpinner from '../LoadingSpinner'
import {
  StyledCardContainer,
  StyledCardH2,
  StyledCardH3,
  StyledCardH4,
  StyledCardH5,
  StyledCardHeader,
  StyledCardHeaderText,
  StyledHeartIcon,
  StyledImage
} from './Card.styles'
import { ICardInterface } from './Card.types'

const Card: FC<ICardInterface> = ({
  bankName = '',
  age = -1,
  description = '',
  url = '',
  loading = false,
  favorite = false,
  onClick = () => {}
}) => {
  const { t } = useTranslation('global')

  return (
    <StyledCardContainer onClick={onClick}>
      <StyledHeartIcon icon={favorite ? faHeart : faHeartRegular} />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <StyledCardHeader>
            <StyledCardHeaderText>
              <StyledCardH3>{t('Component.Card.Bank') as string}</StyledCardH3>
              <StyledCardH2>{bankName}</StyledCardH2>
            </StyledCardHeaderText>
            <StyledImage loading="lazy" src={url} />
          </StyledCardHeader>
          <StyledCardH4>{t('Component.Card.Age') as string}</StyledCardH4>
          <StyledCardH5>{age}</StyledCardH5>
          <StyledCardH4>
            {t('Component.Card.Description') as string}
          </StyledCardH4>
          <StyledCardH5>{description}</StyledCardH5>
        </>
      )}
    </StyledCardContainer>
  )
}

export default Card
