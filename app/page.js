'use client'

import { useState } from 'react'
import Log from './Log'
import TodoList from './TodoList'

export default function Home() {
  const [todoText, setTodoText] = useState('')
  const [todoList, setTodoList] = useState([])
  const [logList, setLogList] = useState([])

  return (
    <>
      <div>
        <main>
          <input
            type='text'
            value={todoText}
            onChange={(event) => {
              setTodoText(event.target.value)
            }}
          />
          <button
            onClick={(event) => {
              const log = {
                time: `${new Date().getFullYear()}. ${new Date().getMonth() + 1}. ${new Date().getDate()}. 오후 ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                title: todoText,
                status: 'added',
              }

              setTodoList(prev => [...prev, todoText])
              setLogList(prev => [...prev, JSON.stringify(log)])
              setTodoText('')
            }}
          >
            입력
          </button>
          <TodoList
            todoList={todoList}
            setLogList={setLogList}
          />
        </main>
        <Log logList={logList} />
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-evenly;
        }
      `}</style>
    </>
  )
}
