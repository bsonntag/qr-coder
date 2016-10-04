// Import polyfills before anything else
import 'babel-polyfill'
import 'isomorphic-fetch'

/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */
import { render } from 'react-dom'

import App from './components/App'

render(<App></App>, document.getElementById('app'))
