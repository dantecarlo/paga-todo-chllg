import { cleanup, render, RenderResult } from 'utils/testUtils'

import Card from './Card'

const bankData = {
  bankName: 'Paga Todo',
  description: 'Banco Paga Todo es Para Todos',
  age: 10,
  url: 'http://www.one.url.com'
}

describe('<Card />', () => {
  let component: RenderResult

  beforeEach(() => {
    component = render(
      <Card
        age={bankData.age}
        bankName={bankData.bankName}
        description={bankData.description}
        loading={false}
        url={bankData.url}
      />
    )
  })

  afterEach(() => {
    cleanup()
  })

  test('render correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
