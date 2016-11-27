import 'phoenix_html'
import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './src/store/createStore'
import AppContainer from './src/containers/AppContainer'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('app')

let render = () => {
  const routes = require('./src/routes').default(store)

  ReactDOM.render(
    <AppContainer store={store} routes={routes} />,
    MOUNT_NODE
  )
}

const test = test
// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./src/routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}
// ========================================================
// Developer Tools Setup
// ========================================================

// if (__DEV__) {
//   if (window.devToolsExtension) {
//     window.devToolsExtension.open()
//   }
// }
// ========================================================
// Go!
// ========================================================
render()
