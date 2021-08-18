import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import './Home.css'
import SchoolSale from '../../Components/SchoolSale/SchoolSale'
import Trending from '../../Components/Trending/Trending'
import Carousel from '../../Components/Carousel/Carousel'
import Foundation from '../../Components/Foundation/Foundation'
import UseTeam from '../../Components/Use-Team/UseTeam'
import Bennefits from '../../Components/Bennefits/Bennefits'
import FooterTop from '../../Components/Footer-top/Footer_top'
// import Popup from '../../Components/Popup/Popup'
import {FiX} from 'react-icons/fi'


function Home() {

    const [show, setShow] = useState (true)

    const showPopup = (e) => {
        localStorage.getItem("jhdfbdkfbkjsdbkjsd", "fjbdjhfbjabfjab")
        setShow(false)
    }

    useEffect (() => {
        if(localStorage.getItem("jhdfbdkfbkjsdbkjsd"), "fjbdjhfbjabfjab")
        setShow(false)
    })
    return (
        <div className="home"> 
        {show ? <div className="popup">
        <FiX onClick ={showPopup} />
        </div> : ""}
            <div className="main__container">
                <Banner />
            </div>
            <SchoolSale />
            <Trending />
            <Carousel />
            <Foundation />
            <UseTeam />
            <Bennefits />
            <FooterTop />
        </div>
    )
}

export default Home
