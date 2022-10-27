import { cleanup, render, RenderResult } from 'utils/testUtils'

import LoadingSpinner from './LoadingSpinner'

describe('<Card />', () => {
  let component: RenderResult

  beforeEach(() => {
    component = render(<LoadingSpinner />)
  })

  afterEach(() => {
    cleanup()
  })

  test('render correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
