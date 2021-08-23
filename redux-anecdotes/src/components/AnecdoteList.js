
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector (state => state.anecdotes)

  const vote = (id) => {
    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id)
    dispatch(voteAnecdote(id))
    dispatch(
      showNotification("OK", `You voted '${votedAnecdote.content}'`)
    )
    setTimeout(() => {
      dispatch(
        hideNotification()
      )
    }, 1000);
  }

  const orderedAnecdotes = anecdotes.sort((a, b) => (b.votes - a.votes))

  return (
    <div>
      { orderedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div> )}
    </div>
  )
}

export default AnecdoteList