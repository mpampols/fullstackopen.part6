
import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdoteObject = {
      content: event.target.anecdote.value,
      id: null,
      votes: 0
    }
    event.target.anecdote.value = ''

    // Create note in server
    const newAnecdote = await anecdoteService.create(anecdoteObject)

    // Dispatch event in reducer
    dispatch(createAnecdote(newAnecdote.content))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm