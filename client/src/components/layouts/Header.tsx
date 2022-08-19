import React, { useState } from 'react'
import { MoonIcon, SunIcon, LightBulbIcon } from '@heroicons/react/solid'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = ({ theme, setTheme }) => {
  return (
    <header className='header-container'>
      <NavLink to={'/'}>
        <div className='logo-container'>
          {' '}
          <LightBulbIcon className='h-6 w-6 mr-2' />
          <p>XenElectronic</p>
        </div>
      </NavLink>
    </header>
  )
}

export default Header
