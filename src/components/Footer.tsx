import { Link } from 'react-router'
import '../styles/components/Footer.css'

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/user/login">Login</Link>
        <Link className="link" to="/user/register">Register</Link>
        <p> FriendSpace ltd.</p>
      </nav>
    </footer>
  )
}

export default Footer
