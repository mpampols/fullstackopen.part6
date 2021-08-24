import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from '../reducers/anecdoteReducer'
import filterReducer from '../reducers/filterReduce'
import notificationReducer from '../reducers/notificationReducer'

const combineReducer = combineReducers({
  anecdotes: anecdoteReducer,
  notifications: notificationReducer,
  filter: filterReducer
})

const store = createStore(combineReducer, composeWithDevTools())

console.log(store.getState())

export default store