import React from 'react'
import Counter from './useStateChallenege/Counter'
import TodoList from './useStateChallenege/TodoList'
import Profile from './useStateChallenege/Profile'

const App = () => {

  return (
   <section>
      <Counter />
      <TodoList />
      <br />
      <Profile />
   </section>
  ) 
}

export default App