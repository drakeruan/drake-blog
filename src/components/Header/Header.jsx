import React from 'react'

import './Header.css'

const Header = () => {
  return (
    <nav className='header'>
      <div className='header__logo'>
        <h2>@drakeruan</h2>
      </div>
      <div className='header__menu'>
        <div className='header__menu__item'>
          Home
        </div>
        <div className='header__menu__item'>
          Project
        </div>
        <div className='header__menu__item'>
          About
        </div>
      </div>
    </nav>
  )
}

export default Header