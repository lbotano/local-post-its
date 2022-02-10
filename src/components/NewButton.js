import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { AddCircle } from '@material-ui/icons'

//
// Button for creating a new note
//

const NewButton = ({ onClick }) => {
  const useStyles = makeStyles({
    root: {
      width: '100%'
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-around'
    },
    icon: {
      fontSize: 60
    }
  })

  const classes = useStyles()

  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="secondary"
      classes={{ root: classes.root, label: classes.label }}
    >
      <AddCircle className={classes.icon}/>
      <Typography>
        New note
      </Typography>
    </Button>
  )
}

NewButton.propTypes = {
  onClick: PropTypes.func
}

export default NewButton
