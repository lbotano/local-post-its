import React, { Suspense, lazy, useState } from 'react'
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
const NoteList = lazy(() => import('./components/NoteList'))
import Loading from './components/Loading'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  main: {
    marginTop: '2em',
    flexGrow: 1
  }
})

const App = () => {
  const dispatch = useDispatch()

  const classes = useStyles()

  useState(() => {
    dispatch(updateNotes())
  }, [])

  return (
    <div className={classes.container}>
      <CssBaseline />
      <AppBar position={'sticky'}>
        <Toolbar>
          <Typography variant="h6">
            Your notes
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth={'md'} className={classes.main}>
        <Suspense fallback={<Loading />}>
          <NoteList />
        </Suspense>
      </Container>
    </div>
  )
}

export default App
