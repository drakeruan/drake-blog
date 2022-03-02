import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'><h2>@drakeruan</h2></Link>
      </div>
      <nav className='nav__menu'>
        <Link to='/'>
          <div className='nav__menu__item'>
            Home
          </div>
        </Link>
        <Link to='/project'>
          <div className='nav__menu__item'>
            Project
          </div>
        </Link>
        <Link to='/about'>
          <div className='nav__menu__item'>
            About
          </div>
        </Link>
      </nav>
    </header>
  )
}

export default Header