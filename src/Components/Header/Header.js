import React from 'react'
import './Header.css'
import jordan from '../../assets/jordan.svg'
import { FiHeart, FiSearch } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
// import { useState } from 'react';


function Header() {
    const handleHeaderSearch = (e) =>{
        const mainHeader = document.querySelector(".main__header")
        mainHeader.classList.add("activeMainHeader") 
    }


    return (
        <div className="header">
            <div className="header__top">
                <div className="header__topLogoContainer">
                    <img src={jordan} alt="logo" className="header__topLogo" />
                </div>
                <ul className="header__topCollection">
                    <li className="header__topItem">Help
                        <ul className="help__options">
                            <h3>Help</h3>
                            <li className="help__items">Order status</li>
                            <li className="help__items">Dispatch and delivery</li>
                            <li className="help__items">Returns</li>
                            <li className="help__items">Size charts</li>
                            <li className="help__items">Contact us</li>
                            <li className="help__items">Privacy Policy</li>
                            <li className="help__items">Terms of Sale</li>
                            <li className="help__items">terms os Use</li>
                            <li className="help__items">Send us feedback</li>

                        </ul></li>
                    <li className="header__topItem">Join us</li>
                    <li className="header__topItem">Sign in</li>
                </ul>
            </div>
            <div className="main__header">
                <div className="mainheader__container">
                    <img src="https://brandlogos.net/wp-content/uploads/2020/11/nike-swoosh-logo.png" alt="" className="mainheader__logo" />
                    <ul className="mainheader__collection">
                        <li className="mainheader__item">New Realease</li>
                        <li className="mainheader__item">Men</li>
                        <li className="mainheader__item">Women</li>
                        <li className="mainheader__item">Kids</li>
                        <li className="mainheader__item">Customise</li>
                        <li className="mainheader__item">Sele</li>
                        <li className="mainheader__item">Back to School</li>
                    </ul>
                    <div className="mainheader__options">
                        <div className="searchBar" onClick={handleHeaderSearch}>
                            <FiSearch />
                            <input type="text" placeholder="Search ..." className="searchBar__input"  />
                        </div>
                        <FiHeart />
                        <BsBag />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
