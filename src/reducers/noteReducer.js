import localforage from 'localforage'
import { v4 as uuid } from 'uuid'

import { noteStore } from '../localforageStores'

const noteReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_NOTES':
    return action.data
  case 'CREATE_NOTE':
    return state.concat(action.data)
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

export const createNote = (content, media = null) => {
  return async (dispatch) => {
    const newNote = {
      id: uuid(),
      timestamp: Date.now(),
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

export const deleteNote = (id) => {
  return async (dispatch) => {
    try {
      await noteStore.removeItem(id)
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
