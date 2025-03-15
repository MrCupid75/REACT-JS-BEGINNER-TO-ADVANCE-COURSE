import React, { useState } from 'react'

const Profile = () => {

    const [user, setUser] = useState({name: "Beast", age: 45})

    const [inputValueName, setInputValueName] = useState("")
    const [inputValueAge, setInputValueAge] = useState("")

    const handleChangeName =(event) => setInputValueName(event.target.value)
    const handleChangeAge =(event) => setInputValueAge(event.target.value)

    const handleClickAge = () => {
        setUser({...user, age:inputValueAge})
        setInputValueAge("")
    }

    const handleClickName = () => {
        setUser({...user, name:inputValueName})
        setInputValueName("")
    }

  return (
    <div>
        <h1>Profile</h1>
        <h4>Name: {user.name}</h4>
        <h4>Age: {user.age}</h4>

        <input type="text" placeholder='Enter something' value={inputValueName} onChange={handleChangeName}/>
        <button onClick={handleClickName}>Update name</button>
        <input type='number' placeholder='Enter something' value={inputValueAge} onChange={handleChangeAge}/>
        <button onClick={handleClickAge}>Update Age</button>
    </div>
  )
}

export default Profile