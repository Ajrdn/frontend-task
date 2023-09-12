import {React, useContext} from 'react'
import Todo from './Todo'
import TodoListContext from './TodoListContext'

export default function TodoList({setLogList}) {
  const todoList = useContext(TodoListContext)

  return (
    todoList.map((todo, index) => (
      <Todo
        key={`${todo} + ${index}`}
        todo={todo}
        setLogList={setLogList}
      />
    ))
  )
}
