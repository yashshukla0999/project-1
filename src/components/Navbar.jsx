import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <h4>Estatery</h4>
        <ul>
        <li><a className='active' href="default.asp">Rent</a></li>
        <li><a href="news.asp">Buy</a></li>
        <li><a href="contact.asp">Sell</a></li>
        <li><a href="about.asp">Manage Property</a></li>
        <li><a href="about.asp">Resources</a></li>
        </ul>

        <button className='white'><a href="#">Login</a></button>
        <button className='purple'><a href="#">Sign up</a></button>
    </div>
  )
}

export default Navbar