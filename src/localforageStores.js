import localforage from 'localforage'

const DB_NAME = 'localpostits'

export const noteStore = localforage.createInstance({
  name: DB_NAME,
  storeName: 'notes',
  description: 'Store where notes are saved'
})
