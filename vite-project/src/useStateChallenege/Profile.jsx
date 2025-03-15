import React, { useState } from 'react'

const Profile = () => {

    const [user, setUser] = useState({name: "Beast", age: 45})

    const handleClick = () => setUser(() => {
        return {...user, name: "Raw", age: 23}
    })

  return (
    <div>
        <h1>Profile</h1>
        <h4>Name: {user.name}</h4>
        <h4>Age: {user.age}</h4>

        <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Profile