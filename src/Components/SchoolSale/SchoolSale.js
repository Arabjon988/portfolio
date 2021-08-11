import React from 'react'
import './SchoolSale.css'
import imgschool from '../../assets/imgschool.jpg'

function SchoolSale() {
    return (
        <div className="schoolsale">
            <div className="schoolsale__container">
                <div className="schoolsale__main">
                <img src={imgschool} alt="" className="imgschool" />
                </div>
                <div className="schoolsale__double">
                    <div className="schoolsale__item primary "></div>
                    <div className="schoolsale__item secondry "></div>
                </div>
            </div>

        </div>
    )
}

export default SchoolSale
