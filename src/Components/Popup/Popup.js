import React, { useEffect, useRef } from 'react'
import './Popup.css'

function Popup() {

    const example = useRef()
    useEffect(() =>{
        example.current.style.backgroundColor = "red"
    })

    return (
        <div className="popup">
            <div className="example" ref={example}></div>
        </div>
    )
}

export default Popup
