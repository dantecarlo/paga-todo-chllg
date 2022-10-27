import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledHeader = styled('header')`
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(242, 242, 242, 0.1);
  padding: 1rem 3rem;

  @media (max-width: 1023px) {
    padding: 1rem;
  }
`
export const StyledNav = styled('nav')`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1023px) {
    justify-content: center;
  }
`

export const StyledUl = styled('ul')`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledLi = styled('li')`
  margin: 0 1rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.7px);
  -webkit-backdrop-filter: blur(7.7px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1rem;

  &:first-child {
    margin-left: 0;
  }
`

export const StyledLink = styled(Link)`
  color: var(--color-font-contrast);
  text-decoration: none;
`
