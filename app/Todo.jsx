'use client'

import { useState } from 'react'

export default function Todo({todo, setLogList}) {
  const [done, setDone] = useState(false)

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
