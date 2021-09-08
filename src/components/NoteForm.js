import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

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
      <div>
        <input type="text" value={note} onChange={(event) => setNote(event.target.value)} />
      </div>
      <div>
        <input type="file" accept="image/*,video/*,audio/*" onChange={async (event) => setMedia(await toBase64(event.target.files[0]))} />
      </div>
      <div>
        <span>Media preview:</span>
        {
          <MediaDisplayer media={media} />
        }
      </div>
      <input type="submit" />
    </form>
  )
}

export default NoteForm
