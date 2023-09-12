import {React, useContext} from 'react'
import LogListContext from './LogListContext'

export default function Log() {
  const logList = useContext(LogListContext)

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
