import React, {useState} from 'react';
import Arrow from './Arrow';
import './Slider.css';
import dataSlider from './SliderData'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  const [slideText, setSlideText] = useState("lfms")

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                console.log(obj)
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/imgForSlider/${index + 1}.jpg`}
                        draggable='false'
                        />
                        {/* <div className="SliderText">
                            {obj.title}
                        </div> */}
                    </div>
                )
            })}
            <Arrow moveSlide={nextSlide} direction={"next"} />
            <Arrow moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    key = {index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider