import React from 'react'
import './Navbar.css'
import logo from '../../../Images/Mystic-Archives-Logo.png'





const Navbar = () => {
    return (
        <nav className='container'>
            <ul>
                <li></li>
                <li><a href="">Каталог</a></li>
                <li><a href="./Genres">Жанрове</a></li>
            </ul>
          <a href="/"><img src={logo} alt="" className="image_logo" /></a>
            <ul>
                <li><a href="">Автори</a></li>
                <li><a href="">Новини</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
