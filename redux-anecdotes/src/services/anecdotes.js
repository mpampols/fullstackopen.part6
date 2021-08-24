import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const update = (newObject) => {
  const request = axios.put(`${ baseUrl }/${newObject.id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }