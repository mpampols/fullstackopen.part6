import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'

const combineReducer = combineReducers({
    anecdotes: anecdoteReducer,
    notifications: notificationReducer
})

const store = createStore(combineReducer, composeWithDevTools())

console.log(store.getState())

export default store