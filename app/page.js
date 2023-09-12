'use client'

import { useForm } from 'react-hook-form'
import Log from './Log'
import TodoList from './TodoList'
import todoListStore from './TodoListStore'
import LogListStore from './LogListStore'

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const setTodoList = todoListStore(state => state.setTodoList)
  const setLogList = LogListStore(state => state.setLogList)

  const onAdd = (data) => {
    const log = {
      time: `${new Date().getFullYear()}. ${
        new Date().getMonth() + 1
      }. ${new Date().getDate()}. 오후 ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      title: data.todoName,
      status: 'added',
    }

    setTodoList(data.todoName)
    setLogList(JSON.stringify(log))
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
          <TodoList />
        </main>
        <Log />
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-evenly;
        }

        span {
          color: red;
        }
      `}</style>
    </>
  )
}
