import { ROUTES } from 'utils/constants/navigation.constants'

import {
  StyledHeader,
  StyledLi,
  StyledLink,
  StyledNav,
  StyledUl
} from './Header.styles'
import useHeader from './hook/useHeader'

const Header = () => {
  const { t } = useHeader()
  const { home } = ROUTES

  return (
    <StyledHeader>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <StyledLink to={home}>
              {t('Component.Header.Bank') as string}
            </StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
