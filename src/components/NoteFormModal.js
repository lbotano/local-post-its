import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Fade, Backdrop } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import NoteForm from './NoteForm'

/* eslint-disable no-magic-numbers */
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 3,
    padding: theme.spacing(2, 4, 3)
  }
}))
/* eslint-enable no-magic-numbers */

const NoteFormModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modal}
      BackdropComponent={Backdrop}
      closeAfterTransition
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <NoteForm onSubmit={handleClose}/>
        </div>
      </Fade>
    </Modal>
  )
}

NoteFormModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired
}

export default NoteFormModal
