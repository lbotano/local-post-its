import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'

import noteReducer from './reducers/noteReducer'

import App from './App'
import theme from './theme'

const store = createStore(
  combineReducers({
    notes: noteReducer
  }),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
