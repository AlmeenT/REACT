import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='logo'> CoffeeRoaster</div>
        <div>
            <ul className='nav-links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li>Create Your plan</li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar