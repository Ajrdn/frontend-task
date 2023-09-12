'use client'

import { useState, useContext } from 'react'
import LogListContext from './LogListContext'

export default function Todo({todo}) {
  const [done, setDone] = useState(false)
  const setLogList = useContext(LogListContext)

  return (
    <div>
      <div>
        <p>{todo}</p>
        <button onClick={() => {
          const log = {
            time: `${new Date().getFullYear()}. ${new Date().getMonth() + 1}. ${new Date().getDate()}. 오후 ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            title: todo,
            status: done ? 'done' : 'none',
          }

          setDone(prev => !prev)
          setLogList(prev => [...prev, JSON.stringify(log)])
        }}>완료</button>
      </div>
      <style jsx>{`
        div {
          display: flex;
        }

        p {
          text-decoration: ${done ? 'line-through' : ''};
        }
      `}</style>
    </div>
  )
}
