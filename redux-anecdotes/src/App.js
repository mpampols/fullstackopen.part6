import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initialState, voteAnecdote, createAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote: ', id)
    dispatch({
      id: id,
      type: 'VOTE'
    })
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }

  const listAnecdotes = () => {
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

  return (
    <div>
      <h2>Anecdotes</h2>
      {listAnecdotes()}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App