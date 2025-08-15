import React,{useState} from 'react'
import '../styles/pages/RegisterPage.css'
import open from '../assets/open.png'
import closed from '../assets/closed.png'

const RegisterPage = () => {
    const [userInfo, setUserInfo] = useState({
        fname: '',
        lname: '',
        username: '',
        email: '',
        
    })
    const [show, setShow] = useState(false)

    const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target
      setUserInfo((prev)=>({...prev, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(userInfo)
    }
  return (
        <div className="pageContainer">
            <div className='registerContainer'>
              <h1>Register</h1>
              <form className='registerForm' onSubmit={handleSubmit}>
              <div className="userContainer">
                <label>First Name</label>
                <input type="text" name="fname" onChange={handleUserInfo}/>
              </div>
              <div className="userContainer">
                <label>Last Name</label>
                <input type="text" name="lname" onChange={handleUserInfo}/>
              </div>
              <div className="userContainer">
                <label>Username</label>
                <input type="text" name="username" onChange={handleUserInfo}/>
              </div>
              <div className="userContainer">
                <label>Email</label>
                <input type="email" name="email" onChange={handleUserInfo}/>
              </div>
              <div className="passwordContainer">
                <label htmlFor='password'>Password</label>
                <input type={show ? 'text': 'password'} name='password' onChange={handleUserInfo}/>
                <button type='button' onClick={()=>setShow(!show)}><img src={show ? open :closed}/></button>
              </div>
              <div className="passwordContainer">
                <label htmlFor='passwordCheck'>Retype Password</label>
                <input type={show ? 'text': 'password'} name='passwordCheck' onChange={handleUserInfo}/>
                <button type='button' onClick={()=>setShow(!show)}><img src={show ? open :closed}/></button>
              </div>
              <button type="submit">Register</button>
              </form>
            </div>
        </div>
  )
}

export default RegisterPage
