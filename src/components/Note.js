import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'

import deleteNote from '../reducers/noteReducer'
import MediaDisplayer from './MediaDisplayer'

const Note = ({ note }) => {
  const cardStyles = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  }
  const actionAreaStyles = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }

  const dispatch = useDispatch()

  const remove = () => {
    if (window.confirm(`Delete note '${note.title}'`)) {
      dispatch(deleteNote(note.id))
    }
  }

  return (
    <Card style={cardStyles}>
      <CardActionArea style={actionAreaStyles}>
        {note.media ? <MediaDisplayer media={note.media} /> : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {note.title}
          </Typography>
          <Typography variant="body2" component="p">
            {note.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={remove} size="small" color="primary">
          Remove
        </Button>
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
