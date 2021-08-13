import React from 'react'
import './UsaTeam.css'

function UseTeam() {
    return (
        <div className="Usa__team">
            <h3>More to Explore</h3>
            <div className="usa__team">
                <div className="usa__teamItem">
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.0/w_586,c_limit/f5ef5e5c-15b2-4c0c-9d26-e0cd2e2a2dcd/nike-just-do-it.jpg" alt="" />
                    <h3>Men's Fleece</h3>
                </div>

                <div className="usa__teamItem">
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.0/w_586,c_limit/260525d3-023e-4642-8417-f6c30b11adef/nike-just-do-it.jpg" alt="" />
                    <h3>Women's Fleece</h3>
                </div>

                <div className="usa__teamItem">
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.0/w_586,c_limit/2ec905c2-96d6-4dda-b2d9-51ae62b005ee/nike-just-do-it.jpg" alt="" />
                    <h3>Kid's Fleece</h3>
                </div>
            </div>
        </div>
    )
}

export default UseTeam
