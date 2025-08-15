import { Link } from 'react-router'
import '../styles/components/Header.css'

const Header = () => {
  return (
    <header>
        <div className='logocontainer'>
            <img className='logo'/>
            <h1 className='heading'>FriendSpace</h1>
        </div>
        <nav className='navbar'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/user/login">Login</Link>
            <Link className='link' to="/user/register">Register</Link>
        </nav>
    </header>
  )
}

export default Header
