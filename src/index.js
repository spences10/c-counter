import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import { theme } from './theme/globalStyle'
import { siteMeta } from './constants'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <div>
      <Helmet title="c-counter" meta={siteMeta} />

      <App />
    </div>
  </ThemeProvider>,
  document.getElementById('root')
)

registerServiceWorker()
