import { cleanup, render, RenderResult } from 'utils/testUtils'

import Header from './Header'

describe('<Header />', () => {
  let component: RenderResult

  beforeEach(() => {
    component = render(<Header />)
  })

  afterEach(() => {
    cleanup()
  })

  test('render correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
