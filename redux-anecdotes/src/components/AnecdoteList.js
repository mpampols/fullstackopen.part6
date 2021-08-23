
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector (state => state.anecdotes)

  const vote = (id) => {
    console.log('vote: ', id)
    dispatch({
      id: id,
      type: 'VOTE'
    })
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