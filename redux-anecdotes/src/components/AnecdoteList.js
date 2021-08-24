
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const vote = (id) => {
    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id)
    dispatch(voteAnecdote(votedAnecdote))
    dispatch(showNotification(`You voted '${votedAnecdote.content}'`, 5))
  }

  const filteredAnecdotes = anecdotes.filter((e) => (e.content.indexOf(filter) !== -1))
  const orderedAnecdotes = filteredAnecdotes.sort((a, b) => (b.votes - a.votes))

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