import {useState} from 'react';
import './Slider.css';
import leftChevron from './icons/chevron-left.svg';
import rightChevron from './icons/chevron-right.svg';

export default function Slider({data = []}) {

    const [slideIndex, setSlideIndex] = useState(0);
    
    const nextSlide = () => {
       
        if(slideIndex < data.length-1){

            setSlideIndex(slideIndex + 1);

        }
        else{

            setSlideIndex(0);

        }

    }

    const prevSlide = () => {

        if(slideIndex > 0){

            setSlideIndex(slideIndex -1);

        }
        else{

            setSlideIndex(data.length-1);

        }
    }

    const handleDotClick = index => {
        setSlideIndex(index);
    }

    return (
        <div className="slider">
            {data.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index  ? "slide active" : "slide"}
                    >
                        <img src={obj.imgUrl} alt="" />
                    </div>
                )
            })}
          
            <button onClick={prevSlide} className= "slide-button prev">
                    <img src={leftChevron} alt="" />
            </button>
            <button onClick={nextSlide} className="slide-button next">
                <img src={rightChevron } alt="" />
            </button>

            <div className="dots-container">
                {Array.from({length: data.length}).map((item, index) => {

                    return <div className={slideIndex === index ? "dot active" : "dot"} onClick={() => handleDotClick(index)} key = {index}></div>
                })}
            </div>
        </div>
    )
}
