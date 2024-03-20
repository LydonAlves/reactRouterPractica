import { NavLink } from 'react-router-dom'
import './Header.css'

import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <ul className='headerList'>
        <li>
          <NavLink to='/' activeclassname='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about/description' activeclassname='active'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' activeclassname='active'>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
