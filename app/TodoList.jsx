import React from 'react'
import Todo from './Todo'
import todoListStore from './TodoListStore'

export default function TodoList() {
  const todoList = todoListStore(state => state.todoList)

  return (
    todoList.map((todo, index) => (
      <Todo
        key={`${todo} + ${index}`}
        todo={todo}
      />
    ))
  )
}
