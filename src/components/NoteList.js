import React from 'react'
import { useSelector } from 'react-redux'

import MediaDisplayer from './MediaDisplayer'

const NoteList = () => {
  const notes = useSelector((state) => state.notes.sort((a, b) => b.timestamp - a.timestamp))

  return (
    <div>
      <ul>
      {
        notes.map((note) => (
          <li key={note.id}>
            <div>{note.content}</div>
            {note.media ? <MediaDisplayer media={note.media} /> : null}
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default NoteList
