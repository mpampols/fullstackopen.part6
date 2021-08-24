
import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdoteObject = {
      content: event.target.anecdote.value,
      id: null,
      votes: 0
    }
    event.target.anecdote.value = ''
    props.createAnecdote(anecdoteObject)
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

const mapDispatchToProps = {
  createAnecdote
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm