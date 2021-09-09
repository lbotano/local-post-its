import React from 'react'
import { useSelector } from 'react-redux'
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'

import MediaDisplayer from './MediaDisplayer'

const NoteList = () => {
  const notes = useSelector((state) => state.notes.sort((a, b) => b.timestamp - a.timestamp))
  
  // This styles make it so the content of the note stretches
  // and pushes the buttons to the bottom
  const gridStyles = {
    display: 'flex',
    alignItems: 'stretch'
  }
  const cardStyles = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  }
  const actionAreaStyles = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }

  return (
    <Grid container alignItems="stretch" spacing={3}>
      {
        notes.map((note) => (
          <Grid item xs={6} sm={3} style={gridStyles}>
            <Card key={note.id} style={cardStyles}>
              <CardActionArea style={actionAreaStyles}>
                {note.media ? <MediaDisplayer media={note.media} /> : null}
                <CardContent>
                  <Typography variant="body2" component="p">{note.content}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default NoteList
