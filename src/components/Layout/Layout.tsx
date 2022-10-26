import { FC } from 'react'

import Header from './Header'
import { StyledBody } from './Layout.styles'
import { ILayout } from './Layout.types'

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <StyledBody>{children}</StyledBody>
    </>
  )
}

export default Layout
