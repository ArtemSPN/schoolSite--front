import React from 'react';
import './Slider.css';
import leftArrow from '../../../img/left-arrow.svg';
import rightArrow from '../../../img/right-arrow.svg';


const Arrow = ({ direction, moveSlide }) => {
  return (
    <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
        <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  )
}

export default Arrow