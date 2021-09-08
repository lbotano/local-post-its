import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { updateNotes, clearNotes } from './reducers/noteReducer'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'

const App = () => {
  const dispatch = useDispatch()

  useState(() => {
    dispatch(updateNotes())
  }, [])

  const clearAllNotes = () => {
    if (window.confirm('Remove all notes?')) {
      dispatch(clearNotes())
    }
  }

  return (
    <div>
      <h1>Local Post-its</h1>
      <NoteForm />
      <NoteList />
      <button onClick={clearAllNotes}>Clear all notes</button>
    </div>
  )
}

export default App
