import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  Button, IconButton, Input, FormGroup
} from '@material-ui/core'
import { AttachFile } from '@material-ui/icons'

import { createNote } from '../reducers/noteReducer'
import MediaDisplayer from './MediaDisplayer'

//
// Form for creating a note
//

const NoteForm = ({ onSubmit }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [media, setMedia] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(createNote(note, title, media))
    onSubmit()
    setTitle('')
    setNote('')
    setMedia(null)
  }

  // Function code taken from https://stackoverflow.com/a/57272491
  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          value={title}
          onChange={
            (event) => setTitle(event.target.value ? event.target.value : null)
          }
          placeholder="Note title"
          style={{ fontSize:'2em' }}
        />
      </FormGroup>
      <FormGroup>
        <Input
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Note content"
          multiline
        />
      </FormGroup>
      <FormGroup>
        <div>
          <IconButton color="primary" component="label">
            <AttachFile />
            <input
              type="file"
              hidden
              accept="image/*,video/*,audio/*"
              onChange={
                async (event) => setMedia(await toBase64(event.target.files[0]))
              }
            />
          </IconButton>
        </div>
        <div>
          {
            <MediaDisplayer media={media} height={250} />
          }
        </div>
      </FormGroup>
      <FormGroup>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </FormGroup>
    </form>
  )
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func
}

export default NoteForm
