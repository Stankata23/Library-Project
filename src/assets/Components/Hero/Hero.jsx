
import React from 'react'
import './Hero.css'
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { useNavigate } from 'react-router-dom'


import Slideshow from '../SlideshowCard/Slideshow';

import first from '../SlideshowCard/Pics/First.jpg'
import second from '../SlideshowCard/Pics/Second.jpg'
import third from '../SlideshowCard/Pics/Third.jpg'


const Hero = () => {

    const navigate = useNavigate()

    const goToGenres = () => navigate('/genres')

        return (
    <div className='hero container'>
    <div className="hero-text">

    {/* SlideShow starts here*/}
    <div className="centered-container">     
    <Slideshow
        images={[
          first, second, third
        ]}
        title= "Най-яката книжарница"
        description="Където въображението е единственият лимит"
      />
      </div> 
      {/* SlideShow ends here */}
    <button onClick={goToGenres} className='btn'>Разгледай жанровете <ArrowRightIcon /></button>

</div>
</div>


    )
}

export default Hero
