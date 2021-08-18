import React, {useState} from 'react'
import './Section.css'

function Section() {
    const [active, setActive] = useState(false)
    return (
        <div className="section">
        <div className={active ? "box active-box" : "box"}></div>
        <button onClick={()=> setActive (!active)}>Set Active</button>
        </div>
    )
}

export default Section

// <div className="section-info"></div>
        // <div className="section-shop"></div>

        // setActive (!active)
        // const box = document.querySelector(".box")
        // setActive(!active)
        // if(!active) {
        //     box.classList.add("active-box")
        // }
        // else{
        //     box.classList.remove("active-box") }
        //