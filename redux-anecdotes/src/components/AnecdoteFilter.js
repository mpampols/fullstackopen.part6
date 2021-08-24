import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { filterAnecdote } from '../reducers/filterReduce'

import store from '../utils/store'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(filterAnecdote(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter