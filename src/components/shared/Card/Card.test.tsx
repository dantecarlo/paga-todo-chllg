import { cleanup, render, RenderResult } from 'utils/testUtils'

import Card from './Card'

describe('<Card />', () => {
  let component: RenderResult

  beforeEach(() => {
    component = render(<Card />)
  })

  afterEach(() => {
    cleanup()
  })

  test('render correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
