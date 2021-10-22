import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'

import store from './store'
import theme from './theme'

const App = lazy(() => import('./App'))
import Loading from './components/Loading'

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Suspense>,
  document.getElementById('root')
)
