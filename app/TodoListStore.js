import { create } from 'zustand'

const todoListStore = create(set => ({
  todoList: [],
  setTodoList: todo => set(state => ({
    todoList: [...state.todoList, todo]
  }))
}))

export default todoListStore
