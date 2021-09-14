import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { updateNotes } from './reducers/noteReducer'
import NoteList from './components/NoteList'

const useStyles = makeStyles({
  main: {
    marginTop: '2em'
  }
})

const App = () => {
  const dispatch = useDispatch()

  const classes = useStyles()

  useState(() => {
    dispatch(updateNotes())
  }, [])

  return (
    <>
      <CssBaseline />
      <AppBar position={'sticky'}>
        <Toolbar>
          <Typography variant="h6">
            Local Post-its
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth={'md'} className={classes.main}>
        <NoteList />
      </Container>
    </>
  )
}

export default App
