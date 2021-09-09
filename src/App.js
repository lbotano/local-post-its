import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CssBaseline, Container } from '@material-ui/core'

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
    <Container maxWidth={'md'}>
      <CssBaseline />
      <h1>Local Post-its</h1>
      <NoteForm />
      <NoteList />
      <button onClick={clearAllNotes}>Clear all notes</button>
    </Container>
  )
}

export default App
