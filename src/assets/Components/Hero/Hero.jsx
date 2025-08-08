
import React from 'react'
import './Hero.css'
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { useNavigate } from 'react-router-dom';

const Hero = () => {

const navigate = useNavigate()

const goToGenres = () => navigate('/genres')

const Hero = () => {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Най-Яката Книжарница</h1>
                <p>Където въображението е единственият лимит</p>

                <button onClick={goToGenres} className='btn'>Разгледай жанровете <ArrowRightIcon /></button>
                <button className='btn'>Разгледай жанровете <ArrowRightIcon /></button>
                <div>
                    <button className='btn-down' onClick={scrollToBottom}><DoubleArrowDownIcon /></button>
                </div>
            </div>
        </div>

    )
}

export default Hero
