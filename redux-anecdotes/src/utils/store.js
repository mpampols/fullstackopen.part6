import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer, { createAnecdote } from '../reducers/anecdoteReducer'
import filterReducer from '../reducers/filterReduce'
import notificationReducer from '../reducers/notificationReducer'

import anecdoteService from '../services/anecdotes'

const combineReducer = combineReducers({
  anecdotes: anecdoteReducer,
  notifications: notificationReducer,
  filter: filterReducer
})

const store = createStore(combineReducer, composeWithDevTools())

// Retrieve anecdotes from server and dispatch a create for each one
anecdoteService.getAll().then(anecdotes => {
  anecdotes.forEach(anecdote => {
    store.dispatch(
      createAnecdote(anecdote.content)
    )
  })
}
)

export default store