import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

const baseWrapper = (componentTree: JSX.Element) => {
  return componentTree
}

const wrapInBrowser = (componentTree: JSX.Element) => {
  return <BrowserRouter>{componentTree}</BrowserRouter>
}

const setupComponent = (ui: JSX.Element) => {
  let componentTree = baseWrapper(ui)

  componentTree = wrapInBrowser(componentTree)

  return componentTree
}

const customRender = (ui: JSX.Element) => {
  const componentTree = setupComponent(ui)
  return render(componentTree)
}

export * from '@testing-library/react'

export { customRender as render }
