import React from 'react'
import LogListStore from './LogListStore'

export default function Log() {
  const logList = LogListStore(state => state.logList)

  return (
    <div>
      {logList.map((log, index) =>
        <div key={`${log} + ${index}`}>
          <h5>Todo list updated</h5>
          <p>{log}</p>
        </div>
      )}
    </div>
  )
}
