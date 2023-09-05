import React from 'react'
import Todo from './Todo'

export default function TodoList({todoList, setLogList}) {
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
