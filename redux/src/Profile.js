import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector(state => state.user.value)
    if(!user.name){
        return 
    }
  return (
    <div>
        <h1>Profile Information</h1>
        <h1>Name: {user.name}</h1>
        <h1>Email: {user.email}</h1>
    </div>
  )
}

export default Profile;