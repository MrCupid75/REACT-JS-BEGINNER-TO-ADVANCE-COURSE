import React, { useState } from 'react'

const ShoppingList = () => {

    const [items, setItems] = useState([
        {id: 1, product: "Laptop", quantity: 4},
        {id: 2, product: "Pendrive", quantity: 6},
    ])

    const addItem = () => setItems([...items, {id: 3, product: "Pen", quantity: 5}])

  return (
    <div>
        <h1>Shopping List</h1>
        {items.map((item) => (
            <li key={item.id} >{item.product}</li>
        ))}
        <br />
        <button onClick={addItem}>Add item</button>
    </div>
  )
}

export default ShoppingList