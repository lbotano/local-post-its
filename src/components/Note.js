import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  IconButton,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  TextField
} from '@material-ui/core'
import { Delete, Edit, Done } from '@material-ui/icons'

import { deleteNote, modifyNote } from '../reducers/noteReducer'
import MediaDisplayer from './MediaDisplayer'

const Note = ({ note }) => {
  const cardStyles = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  }
  const cardContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  }
  const actionAreaStyles = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
  const cardActionsStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  }
  const titleStyles = {
    fontSize: '1.5rem',
    fontFamily: 'Lato, Ubuntu, Roboto, Verdana, sans-serif',
    fontWeight: 400,
    lineHeight: 1.334
  }
  const contentStyles = {
    whiteSpace: 'pre-line',
    fontSize: '0.875rem',
    fontFamily: 'Lato, Ubuntu, Roboto, Verdana, sans-serif',
    fontWeight: 400,
    lineHeight: 1.43
  }

  const dispatch = useDispatch()

  // Currently editing note or not
  const [edit, setEdit] = useState(false)

  // Buffer for editing notes before updating the redux state
  const [editableNote, setEditableNote] = useState(note)

  const remove = () => {
    if (window.confirm(`Delete note '${note.title}'?`)) {
      dispatch(deleteNote(note.id))
    }
  }

  const editTitle = (event) => {
    setEditableNote({
      ...editableNote,
      title: event.target.value
    })
    dispatch(modifyNote(editableNote.id, { title: event.target.value }))
  }

  const editContent = (event) => {
    setEditableNote({
      ...editableNote,
      content: event.target.value
    })
    dispatch(modifyNote(editableNote.id, { content: event.target.value }))
  }

  return (
    <Card style={cardStyles}>
      <CardActionArea style={actionAreaStyles}>
        {note.media ? <MediaDisplayer media={note.media} /> : null}
        {
          edit
            ? (
              <CardContent style={cardContentStyles}>
                <TextField
                  value={editableNote.title}
                  onChange={editTitle}
                  InputProps={{ style: titleStyles }}
                />
                <TextField
                  value={editableNote.content}
                  onChange={editContent}
                  multiline
                  InputProps={{ style: contentStyles }}
                />
              </CardContent>
            )
            : (
              <CardContent style={cardContentStyles}>
                <Typography gutterBottom variant="h5" component="h2">
                  {note.title}
                </Typography>
                <Typography variant="body2" component="p" style={contentStyles}>
                  {note.content}
                </Typography>
              </CardContent>

            )
        }
      </CardActionArea>
      <CardActions style={cardActionsStyles}>
        {
          edit
            ? (
              <IconButton
                size="medium"
                aria-label="save changes"
                onClick={() => setEdit(false)}
              >
                <Done fontSize="inherit" />
              </IconButton>
            )
            : (
              <>
                <IconButton
                  size="small"
                  aria-label="edit note"
                  onClick={() => setEdit(true)}
                >
                  <Edit fontSize="inherit" />
                </IconButton>
                <IconButton
                  size="small"
                  aria-label="delete note"
                  onClick={remove}
                >
                  <Delete fontSize="inherit" />
                </IconButton>
              </>
            )
        }
      </CardActions>
    </Card>
  )
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    media: PropTypes.string
  })
}

export default Note
