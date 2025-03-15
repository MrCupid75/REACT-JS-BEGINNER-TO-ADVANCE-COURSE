import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const handleClick = () => setTodos([...todos, ''])

  return (
    <div>
        <h1>Todo List</h1>
        <ul>
            {todos.map((todo) => (
                <li key={Math.random}>{todo}</li>
            ))}
        </ul>
        <button onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default TodoList