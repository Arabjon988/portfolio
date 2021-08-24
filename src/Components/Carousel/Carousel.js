import React from 'react'
import './Carousel.css'
import Carousel_data from '../../Data/Carousel_data.json'

function Carousel() {
    return (
        <div className="carousel">
            <div className="carousel__collection">
                <h3> The Latest and Greatests</h3>
                <div className="carousel__wrapper">
                    {Carousel_data.map((carouselitem) => (
                        <div className="carousel__item">
                            <img src={carouselitem?.image} alt="Sneakers" />
                            <li className="product__name">{carouselitem?.productName}</li>
                            <li>{carouselitem?.whose}</li>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Carousel


