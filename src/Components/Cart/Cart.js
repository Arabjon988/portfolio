import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import Carousel_data from '../../Data/Carousel_data.json'
import {FiAlertCircle, FiHelpCircle} from  "react-icons/fi"

function Cart() {
    return (
        <div className="cart">
            <div className="cart__container">
                <div className="cart__bag">
                    <div className="shipping__detail">
                        <p>Free Shipping for Members</p>
                        <span>Become a Nike Member for fast and free shipping. <Link>Join us</Link>  or <Link>Sign-in</Link></span>
                    </div>
                    <div className="bag">
                        <h3>Bag</h3>
                        <span>There are no items in your bag.</span></div>
                </div>
                <div className="cart__summary">
                    <h3>Summary</h3>
                    <ul>
                        <li><p>Do you have a Promo Code? <FiHelpCircle/></p></li>
                        <li><p>Subtotal <FiAlertCircle/> </p> <span>$0.00</span></li>
                        <li><p>Estimated Shipping & Handling</p> <span>$0.00</span></li>
                        <li><p>Estimated Tax <FiAlertCircle/> </p> <p>-</p> </li> 
                        <hr />
                        <li className="total"><p>Total</p> <span>$0.00</span></li>
                        <hr />
                        <button>Checkout</button>
                        <button>Paypal</button>
                    </ul>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="favorits">
                    <p>Favorites</p>
                    <span>Want to view your favorites? <Link>Join</Link> us or <Link>Sign-in</Link></span>
                
                </div>
                <hr />
                <div className="shop">
                    <h2>YOU MIGHT ALSO LIKE</h2>
                    <div className="shop-part">
                        {Carousel_data.map((carouselitem) => (
                            <div className="carousel__item">
                                <img src={carouselitem?.image} alt="Snekares" />
                                <li className="product__name">{carouselitem?.productName} </li>
                                <li> {carouselitem?.whose} </li>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
