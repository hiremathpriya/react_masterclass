import React from 'react'
import { render } from 'react-dom'
import getPlayer from './getPlayer'

export { getPlayer }

import { App } from './components'
import registerServiceWorker from './registerServiceWorker'

render(<App />, document.getElementById('root'))
registerServiceWorker()
