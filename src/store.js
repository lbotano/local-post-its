import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import noteReducer from './reducers/noteReducer'

const store = createStore(
  combineReducers({
    notes: noteReducer
  }),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
