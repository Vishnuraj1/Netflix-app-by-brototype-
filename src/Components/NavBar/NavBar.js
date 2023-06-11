import React from 'react'
import { useState } from 'react';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  const [open, setOpen] = useState(false);

  const humburger_btn = () => {
    setOpen(!open)
  }
  console.log(open)
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      {open &&
        <div className='bar'>
          <nav className='list-nav'>
            <ul>
              <li style={{ color: 'white' }}>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>News & Popular</li>
              <li>My List</li>
            </ul>
          </nav>
        </div>
      }
      <FontAwesomeIcon icon={faBars} className='hamburger' onClick={humburger_btn} />
      <FontAwesomeIcon icon={faRectangleXmark} className='close-btn' onClick={humburger_btn} />

      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default NavBar
