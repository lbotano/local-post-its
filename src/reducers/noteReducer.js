import { v4 as uuid } from 'uuid'

import { noteStore } from '../localforageStores'

const noteReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_NOTES':
    return action.data
  case 'CREATE_NOTE':
    return state.concat(action.data)
  case 'MODIFY_NOTE':
    return state.map((note) => {
      if (note.id === action.data.id) {
        return {
          ...note,
          title: action.data.title || action.data.title === ''
            ? action.data.title
            : note.title,
          content: action.data.content || action.data.content === ''
            ? action.data.content
            : note.content
        }
      }
      return note
    })
  case 'DELETE_NOTE':
    return state.filter((note) => note.id !== action.data)
  case 'CLEAR_NOTES':
    return []
  default:
    return state
  }
}

export const updateNotes = () => {
  return async (dispatch) => {
    const notes = []
    await noteStore.iterate((val) => {
      notes.push(val)
    })
    dispatch({
      type: 'SET_NOTES',
      data: notes
    })
  }
}

export const createNote = (content, title = null, media = null) => {
  return async (dispatch) => {
    const newNote = {
      id: uuid(),
      timestamp: Date.now(),
      title,
      content,
      media
    }
    try {
      await noteStore.setItem(newNote.id, newNote)
      dispatch({
        type: 'CREATE_NOTE',
        data: newNote
      })
    } catch (error) {
      alert('unexpected error')
      console.error(error)
    }
  }
}

export const modifyNote = (id, { title = null, content = null }) => {
  return async (dispatch) => {
    const note = await noteStore.getItem(id)
    if (title) {
      note.title = title
    }
    if (content) {
      note.content = content
    }
    try {
      await noteStore.setItem(id, note)
      dispatch({
        type: 'MODIFY_NOTE',
        data: {
          id,
          title,
          content
        }
      })
    } catch (error) {
      alert('unexpected error')
      console.error(error)
    }
  }
}

export const deleteNote = (id) => {
  return async (dispatch) => {
    try {
      console.log('not yet')
      await noteStore.removeItem(id)
      console.log('deleted store item')
      dispatch({
        type: 'DELETE_NOTE',
        data: id
      })
    } catch (error) {
      alert('unexpected error')
      console.error(error)
    }
  }
}

export const clearNotes = () => {
  return async (dispatch) => {
    await noteStore.clear()
    dispatch({ type: 'CLEAR_NOTES' })
  }
}

export default noteReducer
