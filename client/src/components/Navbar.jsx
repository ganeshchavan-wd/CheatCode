import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h2>CheatCode</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
      </div>
    </nav>
  )
}

export default Navbar