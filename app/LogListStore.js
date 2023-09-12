import { create } from 'zustand'

const LogListStore = create(set => ({
  logList: [],
  setLogList: log => set(state => ({
    logList: [...state.logList, log]
  }))
}))

export default LogListStore
