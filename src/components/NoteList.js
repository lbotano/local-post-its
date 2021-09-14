import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'

import Note from './Note'
import NewButton from './NewButton'
import NoteFormModal from './NoteFormModal'

const NoteList = () => {
  const notes = useSelector(
    (state) => state.notes.sort((a, b) => b.timestamp - a.timestamp)
  )

  // Open or close the new note modal
  const [modalOpen, setModalOpen] = useState(false)

  // This styles make it so the content of the note stretches
  // and pushes the buttons to the bottom
  const gridStyles = {
    display: 'flex',
    alignItems: 'stretch'
  }

  const openModal = () => setModalOpen(true)

  return (
    <>
      <NoteFormModal open={modalOpen} setOpen={setModalOpen} />
      <Grid container alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={4} style={gridStyles}>
          <NewButton onClick={openModal}/>
        </Grid>
        {
          notes.map((note) => (
            <Grid key={note.id} item xs={12} sm={4} style={gridStyles}>
              <Note note={note} />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default NoteList
