import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const newAnecdotes = []
      const selectedState = state.find(anecdote => anecdote.id === action.data)
      state.forEach(anecdote => {
        if (anecdote.id === selectedState.id) {
          newAnecdotes.push({
            ...anecdote,
            votes: anecdote.votes + 1
          })
          anecdote.votes += 1
        } else {
          newAnecdotes.push(anecdote)
        }
      });
      return newAnecdotes
    case 'CREATE':
      return state.concat({
        content: action.data,
        id: action.id,
        votes: 0
      })
    default:
      break;
  }
  return state
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: id
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'CREATE',
    data: content,
    id: getId()
  }
}

export default anecdoteReducer