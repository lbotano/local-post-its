import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
}))

const Loading = () => {
  const classes = useStyles()

  return (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  )
}

export default Loading
