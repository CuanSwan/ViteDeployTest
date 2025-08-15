import React, { useState } from 'react'
import '../styles/pages/LoginPage.css'
import open from '../assets/open.png'
import closed from '../assets/closed.png'

const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    })

    const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setLoginInfo((prev)=>({...prev, [name]: value}))
    }

    const [show, setShow] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //api call here
        console.log(loginInfo)
        console.log("Form Submitted")
    }

    return (
        <div className="pageContainer">
            <div className='loginContainer'>
                <h1>Login</h1>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <div className='userContainer'>
                        <label htmlFor='username'>Username/email</label>
                        <input type='text' placeholder='Username' name='username' onChange={handleUserInfo}/>
                    </div>
                    <div className='passwordContainer'>
                        <label htmlFor='password'>Password</label>
                        <input type={show ? 'text': 'password'} name='password' onChange={handleUserInfo}/>
                        <button type='button' onClick={()=>setShow(!show)}><img src={show ? open :closed}/></button>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
  )
}

export default LoginPage
