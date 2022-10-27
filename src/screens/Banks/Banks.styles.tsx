import styled from 'styled-components'

export const StyledContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const StyledCardContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`
