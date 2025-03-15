import React, { useState } from 'react'

const ShoppingList = () => {

    const [items, setItems] = useState([
        {id: 1, product: "Laptop", quantity: 4},
        {id: 2, product: "Pendrive", quantity: 6},
    ])

    const [inputProduct, setProduct] = useState("")
    const [inputQuantity, setQuantity] = useState("")

    const handleProductChange = (e) => setProduct(e.target.value)
    const handleQuantityChange = (e) => setQuantity(e.target.value)

    const addItem = () => setItems([...items, {id: Math.random, product: inputProduct, quantity: inputQuantity}])

  return (
    <div>
        <h1>Shopping List</h1>
        {items.map((item) => (
            <ul>
                <li key={item.id} >{item.product}</li>
                <li key={item.id}> {item.quantity}</li>
            </ul>
        ))}
        <br />
        <input type="text" placeholder='Enter product' onChange={handleProductChange} />
        <input type="text" placeholder='Enter quantity' onChange={handleQuantityChange}/>
        <button onClick={addItem}>Add item</button>
    </div>
  )
}

export default ShoppingList