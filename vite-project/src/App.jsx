import React from 'react'
import Counter from './useStateChallenege/Counter'
import TodoList from './useStateChallenege/TodoList'
import Profile from './useStateChallenege/Profile'
import ShoppingList from './useStateChallenege/ShoppingList'

const App = () => {

  return (
   <section>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
   </section>
  ) 
}

export default App