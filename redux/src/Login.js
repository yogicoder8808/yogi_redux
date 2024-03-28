import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login,logout } from './features/User';
import { useSelector } from 'react-redux';

function Login() {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const user = useSelector(state => state.user.value)

    const handleSubmit= (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
    }  
    
return (
    <div>
        <form onSubmit={handleSubmit}>
            {!user.name && (
                <div > 
                    
                    <input value={name} onChange={e => setName (e.target.value)} placeholder='Enter Name'/> <br/>
                    <input value={email} onChange={e => setEmail (e.target.value)} placeholder='Enter Email ID'/>
                </div>
            
            )}
            
            {!user.name ? <button onClick={()=>dispatch(login({name, email}))}>Login</button> 
                        : <button onClick={()=>dispatch(logout())}>Logout</button>}
        </form>
    </div>
    
  )
}

export default Login;