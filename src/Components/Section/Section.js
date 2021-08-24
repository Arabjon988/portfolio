import React, { useState } from 'react'
import './Section.css'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { BiSlider } from 'react-icons/bi'
import Shop_data from '../../Data/Shop-data.json'


function Section() {


    const [active, setActive] = useState(false)
    return (
        <div className="section">

            <div className="section-wrapper">
                <h2>Run Fearless Shoes(5)</h2>
                <div className="filter">
                    <h3>Hide Filters</h3>
                    <BiSlider />
                </div>
                <div className="sort">
                    <h2>Sort By</h2>
                    <FiChevronDown />
                </div>
            </div>
            <div className="section-bar">
                <div className="section-info">
                    <div className="workout">
                        <li>Running</li>
                        <li>Walking</li>
                    </div>
                    <ul className="section__collection">
                        <li className="section__item" onClick={()=> setActive (!active)}> {active ? <FiChevronUp/> : <FiChevronDown />} <p>Gender</p> 
                        <ul className={active ? 'activeUl' : 'notActiveUl'}>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Unisex</li>
                        </ul></li>
                        <hr className="hear" />
                        <li className="section__item" ><p>Shop by Price </p>  <ul className="box">
                        <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Unisex</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Unisex</li>
                        </ul>
                        </li>
                        <hr className="hear" />
                        <li className="section__item" ><p>Color</p> <FiChevronDown className="block" /><FiChevronUp className="none" /> <ul className="box">
                        <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Unisex</li>
                        </ul></li>
                        <hr className="hear" />
                        <li className="section__item" ><p>Icon</p> <FiChevronDown className="block" /> <FiChevronUp className="none" /><ul className="box">
                        <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Unisex</li>
                        </ul>
                        </li>
                        <hr className="hear" />
                        <li className="section__item" > <p>Technology</p> <FiChevronDown className="block" /> <FiChevronUp className="none" /><ul className="box">
                        <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Unisex</li>
                        </ul></li>
                        <hr className="hear" />
                        <li className="section__item" ><p>Shoe Height</p> <FiChevronDown className="block"  /><FiChevronUp className="none" /> <ul className="box">
                                <li></li>
                                <li></li>
                                <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Unisex</li>
                            </ul></li>
                        <hr className="hear" />
                        <li className="section__item" > <p>Width</p> <FiChevronDown className="block" /><FiChevronUp className="none" /> <ul className="box">
                            <li></li>
                            <li></li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Unisex</li>
                        </ul>
                        </li>
                        <hr className="hear" />className="none" 
                        <li className="section__item" ><p>Shoe Feel</p> <FiChevronDown className="block" /> <FiChevronUp className="none" /><ul className="box">
                            <li></li>
                            <li></li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Unisex</li>
                        </ul>
                        </li>
                        <hr className="hear" />
                        <li className="section__item" ><p>Best For</p> <FiChevronDown className="block" /><FiChevronUp className="none" /> <ul className="box">
                            <li></li>
                            <li></li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Unisex</li>
                        </ul>
                        </li>
                        <hr className="hear" />
                        <li className="section__item" ><p>Features</p> <FiChevronDown className="block" /><FiChevronUp className="none" /> <ul className="box">
                                <li></li>
                                <li></li>
                                <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Unisex</li>
                            </ul></li>
                        <hr className="hear" />
                        <li className="section__item" ><p>Bennefits</p> <FiChevronDown className="block"  /> <FiChevronUp className="none" /> <ul className="box">
                            <li></li>
                            <li></li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Women</li>
                            <li><input type="checkbox" name="" id="checkbox" /> Unisex</li>
                        </ul></li>
                        <hr className="hear" />
                    </ul>
                </div>
                <div className="section-shop">
                    {Shop_data.map((section) => (
                        <div className="shop__item">
                            <img src={section?.image} alt="Sneakers" />
                            <li className="product__name">{section?.productName}</li>
                            <li>{section?.whose}</li>
                            <li>{section?.colors}</li>
                            <li>{section?.price} <del>$160</del></li>
                        </div>
                    ))
                    }
                    <div className="shop-style">
                        <h2>UP TO 40% OFF</h2>
                        <p>Shop all styles</p>
                        <button className="shop__btn">Shop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section



        // setActive (!active)
        // const box = document.querySelector(".box")
        // setActive(!active)
        // if(!active) {
        //     box.classList.add("active-box")
        // }
        // else{
        //     box.classList.remove("active-box") }
        //