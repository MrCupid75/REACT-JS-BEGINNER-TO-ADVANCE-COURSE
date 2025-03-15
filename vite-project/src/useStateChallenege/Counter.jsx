import React, { useState } from 'react'

const Counter = () => {
    
    const [count, setCount] = useState(() => {
        const initialCount = 0
        return initialCount
    })

    const addOne = () => setCount((preCount) => preCount + 1)

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+</button>
    </div>
  )
}

export default Counter