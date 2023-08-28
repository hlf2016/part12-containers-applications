import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      <hr />
      {todos.map(todo => {
        return (
          <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        )
      })}
    </>
  )
}

export default TodoList
