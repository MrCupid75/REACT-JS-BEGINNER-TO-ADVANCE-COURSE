import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim()) {
            setTodos([...todos, inputValue])
            setInputValue("")
        }
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

  return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter a todo' value={inputValue} onChange={handleChange}/>
            <button>Add todo</button>

            <ul>
                {todos.map(todo => (
                    <li key={Math.random}>{todo}</li>
                ))}
            </ul>
        </form>
    </div>
  )
}

export default TodoList