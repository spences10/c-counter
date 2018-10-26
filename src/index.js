import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

import * as serviceWorker from './serviceWorker'

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
