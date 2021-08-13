import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <div className="main__bannerContent">
                <div className="main__bannerInfo">
                    <h1>TEAM USA ESSENTIALS</h1>
                    <p>Cheer on all athletes as they take on the world in Tokyo</p><br />
                    <button className="shop__btn first">Shop</button>
                </div>
            </div>
            <div className="contentSeparator">
                <span>MASTER THE BASICS</span>
                <p>Start fresh this school year with new basics that are anything but basic</p>
                <button className="shop__btn">Shop</button>
            </div>
        </div>
    )
}

export default Banner
