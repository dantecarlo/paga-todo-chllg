import styled from 'styled-components'

export const StyledCardContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 23rem;
  height: 12rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.2px);
  -webkit-backdrop-filter: blur(6.2px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;

  @media (max-width: 1024px) {
    width: 80%;
  }
`

export const StyledCardHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledCardHeaderText = styled('div')`
  display: flex;
  flex-direction: column;
`

export const StyledImage = styled('img')`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
`

export const StyledCardH2 = styled('h2')`
  font-weight: 600;
  color: var(--color-font);
  margin: 0;
  margin-bottom: 2rem;
`

export const StyledCardH3 = styled('h3')`
  font-weight: 400;
  color: var(--color-font);
  margin: 0;
  margin-bottom: 0.5rem;
`

export const StyledCardH4 = styled('h4')`
  font-weight: 600;
  color: var(--color-font);
  margin: 0;
  margin-bottom: 0.1rem;
`

export const StyledCardH5 = styled('h5')`
  font-weight: 400;
  color: var(--color-font);
  margin: 0;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`
