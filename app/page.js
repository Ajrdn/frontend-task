'use client'

import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Log from './Log'
import TodoList from './TodoList'

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [todoList, setTodoList] = useState([])
  const [logList, setLogList] = useState([])

  useEffect(() => {

  }, [todoList])

  const onAdd = (data) => {
    const log = {
      time: `${new Date().getFullYear()}. ${
        new Date().getMonth() + 1
      }. ${new Date().getDate()}. 오후 ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      title: data.todoName,
      status: 'added',
    }

    setTodoList((prev) => [...prev, data.todoName])
    setLogList((prev) => [...prev, JSON.stringify(log)])
  }

  return (
    <>
      <div>
        <main>
          <form onSubmit={handleSubmit(onAdd)}>
            <input
              type='text'
              {...register('todoName', {required: true})}
            />
            {errors.todoName && <span>TodoName is required.</span>}
            <button
              type='submit'
            >
              입력
            </button>
          </form>
          <TodoList todoList={todoList} setLogList={setLogList} />
        </main>
        <Log logList={logList} />
      </div>
      <style jsx>{`
        div {
          display: flex
          justify-content: space-evenly
        }

        span {
          color: red;
        }
      `}</style>
    </>
  )
}
