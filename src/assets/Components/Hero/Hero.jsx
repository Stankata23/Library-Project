import React from 'react'
import './Hero.css'
import { ArrowRightIcon } from "@radix-ui/react-icons"

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Най-Яката Книжарница</h1>
                <p>Където въображението е единственият лимит</p>
                <button className='btn'>Разгледай жанровете <ArrowRightIcon /></button>
            </div>
        </div>
    )
}

export default Hero
