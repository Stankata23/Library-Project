import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import "./Slideshow.css";

function Slideshow({ images, title, description }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt={title}
        className="slideshow-image"
      />
       

      {/* Overlay text */}
      <div className="slideshow-overlay">
        <h1 className='slideshow-title'>{title}</h1>
        <p>{description}</p>
      </div>


       {/* Left Button */}
       <button className="slideshow-button left" onClick={handlePrev}>
         <ArrowLeftIcon width={24} height={24} />
       </button>

       {/* Right Button */}
       <button className="slideshow-button right" onClick={handleNext}>
         <ArrowRightIcon width={24} height={24} />
       </button>
     </div>
  );
}

export default Slideshow;