import React from 'react'
import './Navbar.css'
import logo from '../../../Images/Mystic-Archives-Logo.png'





const Navbar = () => {
    return (
        <nav className='container'>
            <ul>
              <li><a href="./BookManager" className='nav-link'>Каталог</a></li>
                <li><a href="./Genres" className='nav-link'>Жанрове</a></li>

            </ul>
          <a href="/"><img src={logo} alt="" className="image_logo" /></a>
            <ul>
                <li><a href="./Authors" className='nav-link'>Автори</a></li>
                <li><a href="" className='nav-link'>Новини</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
