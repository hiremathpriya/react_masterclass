// src/index.js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import getBoard from './getBoard'
import getPlayer from './getPlayer'
import getWins from './getWins'

import { App } from './components'
import { configureStore } from './state'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
export { getBoard, getPlayer, getWins }
