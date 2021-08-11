import React from 'react'
import './Trending.css'

const Trending = () => {
    return (
        <div className="trending">
            <h3>Trending Now</h3>
            <div className="trending__container">
                <div className="trending__item first">
                    <div className="trend">
                        <span>The New One Top Collection</span>
                        <button className="shop__btn">Shop</button>
                    </div>

                </div>
                <div className="trending__item second">
                    <div className="trend">
                        <span>Must-Have Matching Sets</span>
                        <button className="shop__btn">Shop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending
