import React from 'react'
import {Link} from 'react-router-dom'
import image from "../images/user.png"
import dropdown from "../images/dropdown.png"
import './style.css'
function Navbar() {
  return (

    <div>
      <div className="NavBar">
        <ul>
          <Link exact to="/">
            <li>
              Home
            </li>
          </Link>

          <Link to="/Mycalender">
            <li>My Calendar
            </li>
          </Link>

          <Link to="/Widgets">
            <li>Widgets
            <img  src={dropdown} alt="image not found" width={20} height={20}  />
            </li>

          </Link>
          <div className="mt-5">
  <img  src={image} alt="image not found" width={25} height={25}  />
  </div>
        </ul>
      </div>
    </div>

  )
}

export default Navbar