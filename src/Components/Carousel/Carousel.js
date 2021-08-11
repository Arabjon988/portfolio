import React from 'react'
import './Carousel.css'
import Carousel_data from '../../Data/Carousel_data.json'

function Carousel() {
    return (
        <div className="carousel">
            <div className="carousel__wrapper">
            <h3>The Latest and Greatests</h3>
                {Carousel_data.map((carouselitem) => (
                    <div className="carousel__item">
                        <img src={carouselitem?.image} alt="picture" />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Carousel
