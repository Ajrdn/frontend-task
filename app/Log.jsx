import React from 'react'

export default function Log({logList}) {
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
