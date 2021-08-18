import React from 'react'
import './Header.css'
import jordan from '../../assets/jordan.svg'
import converse from '../../assets/converse.png'
import { FiHeart, FiSearch, FiShoppingBag, FiX } from "react-icons/fi";
import { NavLink, useLocation } from 'react-router-dom'
// import { useState } from 'react';


function Header({ callBack, removeCallBack, shop }) {

    let location = useLocation();

    return (
        <>
        <div className="header">
        <div className="header__top">
                <div className="header__topLogoContainer">
                    <img src={jordan} alt="logo" className="header__topLogo" />
                    <img src={converse} alt="logo" className="header__topLogo2" />
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
                        <div className="searchBar" onClick={callBack}>
                            <FiSearch />
                            <input type="text" placeholder="Search " className="searchBar__input" />
                        </div>
                        <ul className="mainheader__icons">
                            <li><FiHeart className="header__icons" /></li>
                            <li onClick={shop}>
                                <NavLink to="/cart">
                                    <FiShoppingBag className="header__icons" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="close__searchActive" onClick={removeCallBack} >
                        <FiX />
                    </div>
                </div>
            </div>
            
           {location.pathname.match("/cart") ? "" : <div className="header__sale">
                <p>FREE SHIPPING & 60-DAY FREE RETURNS</p>
                <a href="https://www.google.com">Join Now</a>
            </div> } 
        </div>
    
    </>
    )
}

export default Header


// <ul className="searchHistory__collection">
//                         <li className="historyCollection__item">Popular Search Terms</li>
//                         <li className="historyCollection__item">Air Force 1</li>
//                         <li className="historyCollection__item">Jordan</li>
//                         <li className="historyCollection__item">Air Max</li>
//                         <li className="historyCollection__item">Blazer</li>
//                     </ul>