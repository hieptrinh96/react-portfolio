import { Link } from "react-router-dom"
import './NavBar.css'

function NavBar() {
  return (
    <nav>
        <div className="home-link">
          <Link
            to='/'
          >
            Mike Trinh
          </Link>
        </div>

        <ul className="ul-container">
          <li>
            <Link
              to='/contact'
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to='/resume'
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to='/projects'
            >
              Projects
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar;