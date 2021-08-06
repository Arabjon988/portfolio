import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Header from '../../Components/Header/Header'
import './Home.css'

function Home() {

    const handleHeaderSearch = (e) =>{
        const mainContainer = document.querySelector('.main__container')
        mainContainer.classList.add('mainContainerNotActive')
        const mainHeader = document.querySelector(".main__header")
        mainHeader.classList.add("activeMainHeader") 
    }

    const handleHeaderSearchHide = (e)=>{
        const mainContainer = document.querySelector('.main__container')
        mainContainer.classList.remove('mainContainerNotActive')
        const mainHeader = document.querySelector(".main__header")
        mainHeader.classList.remove("activeMainHeader")
    }

    const handleHeaderShop = (e) => {
        const banner = document.querySelector(".banner")
        banner.classList.add("activeBanner")
        const headerSale = document.querySelector(".header__sale")
        headerSale.classList.add("activeHeaderSale")
    }

    const handleHeaderShopHide = (e) => {
        const banner = document.querySelector(".banner")
        banner.classList.remove("activeBanner")
        const headerSale = document.querySelector(".header__sale")
        headerSale.classList.remove("activeHeaderSale")
    }

    return (
        <div className="home">
            <Header callBack={handleHeaderSearch} removeCallBack = {handleHeaderSearchHide} />
            <div className="main__container">
                <Banner />
            </div>
        </div>
    )
}

export default Home
