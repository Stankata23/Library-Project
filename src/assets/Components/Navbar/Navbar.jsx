import React from 'react'
import './Navbar.css'
import logo from '../../../Images/Mystic-Archives-Logo.png'

const Navbar = () => {
    return (
        <nav className='container'>
            <ul>
                <li><a href="">Каталог</a></li>
                <li><a href="">Жанрове</a></li>
            </ul>
            <img src={logo} alt="" className="image_logo" />
            <ul>
                <li><a href="">Автори</a></li>
                <li><a href="">Новини</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
