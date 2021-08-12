import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Header from '../../Components/Header/Header'
import './Home.css'
import MainContent from '../../Components/maincontent/MainContent'
import SchoolSale from '../../Components/SchoolSale/SchoolSale'
import Trending from '../../Components/Trending/Trending'
import Carousel from '../../Components/Carousel/Carousel'
import Foundation from '../../Components/Foundation/Foundation'
import UseTeam from '../../Components/Use-Team/UseTeam'
import Bennefits from '../../Components/Bennefits/Bennefits'
import FooterTop from '../../Components/Footer-top/Footer_top'


function Home() {

    const handleHeaderSearch = (e) => {
        const mainContainer = document.querySelector('.main__container')
        mainContainer.classList.add('mainContainerNotActive')
        const mainHeader = document.querySelector(".main__header")
        mainHeader.classList.add("activeMainHeader")
    }

    const handleHeaderSearchHide = (e) => {
        const mainContainer = document.querySelector('.main__container')
        mainContainer.classList.remove('mainContainerNotActive')
        const mainHeader = document.querySelector(".main__header")
        mainHeader.classList.remove("activeMainHeader")
    }

    const handleHeaderShop = (e) => {
        const shopCollection = document.querySelector(".shop__collection")
        shopCollection.classList.add("activeShopCollection")
        const headerSale = document.querySelector(".header__sale")
        headerSale.classList.add("activeHeaderSale")
    }

    const handleHeaderShopHide = (e) => {
        const shopCollection = document.querySelector(".shop__collection")
        shopCollection.classList.remove("activeShopCollection")
        const headerSale = document.querySelector(".header__sale")
        headerSale.classList.remove("activeHeaderSale")
    }

    return (
        <div className="home">
            <Header callBack={handleHeaderSearch} removeCallBack={handleHeaderSearchHide} shop={handleHeaderShop} shopHide={handleHeaderShopHide} />
            <div className="main__container">
                <Banner />
            </div>
            <MainContent />
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
