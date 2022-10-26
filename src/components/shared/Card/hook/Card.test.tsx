import Card from 'components/shared/Card'
import { cleanup, render, RenderResult } from 'utils/testUtils'

describe('<Card>', () => {
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
