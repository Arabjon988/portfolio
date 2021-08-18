import React from 'react'
import './Footer.css'
import {FiInstagram} from 'react-icons/fi'
import {RiFacebookBoxFill, RiYoutubeFill, RiTwitterFill} from 'react-icons/ri'

function Footer() {
    return (
        <div className="footer__bar">
            <div className="footer__bottom">
                <div className="footer__collection">
                    <div className="black">
                        <div className="footerkatta">
                            <div className="blok">
                                <h3>GIFT CARDS</h3>
                                <h3> PROMOTIONS</h3>
                                <h3>FIND A STORE</h3>
                                <h3>SIGN UP FOR EMAIL</h3>
                                <h3>BECOME A MEMBER</h3>
                                <h3>NIKE JOURNAL</h3>
                                <h3>SEND US FEEDBACK</h3>
                            </div>
                            <div className="help">
                                <h3>GET HELP</h3>
                                <p>Order Status</p>
                                <p>Shipping and Delivery</p>
                                <p>Returns</p>
                                <p>Payment Options</p>
                                <p>Gift Card Balance</p>
                                <p>Contact Us</p>
                            </div>
                            <div className="AboutNike">
                                <h3>About Nike</h3>
                                <p>News</p>
                                <p>Careers</p>
                                <p>Investors</p>
                                <p>Purpose</p>
                                <p>Sustainability</p>
                            </div>
                            <div className="icons">
                                <div className="icon"><RiTwitterFill /></div>
                                <div className="icon"><RiFacebookBoxFill /> </div>
                                <div className="icon"><RiYoutubeFill /></div>
                                <div className="icon"><FiInstagram /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
