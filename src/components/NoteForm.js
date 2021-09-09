import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Button, IconButton, Input, FormGroup
} from '@material-ui/core'
import { AttachFile } from '@material-ui/icons'

import { createNote } from '../reducers/noteReducer'
import MediaDisplayer from './MediaDisplayer'

const NoteForm = () => {
  const dispatch = useDispatch()
  const [note, setNote] = useState('')
  const [media, setMedia] = useState(null)

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(createNote(note, media))
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
    <form onSubmit={onSubmit}>
      <FormGroup>
        <Input
          placeholder="Note title"
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
              onChange={async (event) => setMedia(await toBase64(event.target.files[0]))}
            />
          </IconButton>
        </div>
        <div>
          <span>Media preview:</span>
          {
            <MediaDisplayer media={media} />
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

export default NoteForm
