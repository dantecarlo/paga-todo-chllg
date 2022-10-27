import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const StyledContainer = styled('div')`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
`

export const StyledCardContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1023px) {
    justify-content: center;
  }
`

export const StyledFavoriteContainer = styled('div')`
  z-index: 99;
  width: 3rem;
  height: 4rem;
  position: absolute;
  top: -47px;
  right: 0;
  margin: 1rem;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.71);
  border-radius: 16px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.1px);
  -webkit-backdrop-filter: blur(8.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledHeartIcon = styled(FontAwesomeIcon)`
  color: red;
  width: 2.5rem;
  height: 2.5rem;
`
