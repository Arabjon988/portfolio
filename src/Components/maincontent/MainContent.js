import React from 'react'
import './MainContent.css'
import addVideo from '../../Videos/Nike.mp4'
import { NavLink, useLocation } from 'react-router-dom'

function MainContent() {
    var location = useLocation();


    return (
        <>
            {location.pathname.match("/section") ? "" : <div className="main-content">
                {location.pathname.match("/cart") ? "" : <div className="maincontent-wrapper">
                    <h3>Featured: Nike Running</h3>
                    <NavLink to="/section">
                    <div className="maincontent__video">
                        <div className="maincontent__videoInfo">
                            <h1>PROJECT: RUN FEARLESS</h1>
                            <p>Foam meet function for stability and support for miles.</p>
                            <button className="video__calltoact">Explore</button>
                            <button className="video__calltoact">Shop</button>
                        </div>
                            <video autoPlay muted loop className="maincontent__videoSource" src={addVideo}></video>
                        <div className="videoFrame">
                        </div>
                    </div>
                </NavLink>
                </div>

                }
            </div>
            }
        </>
    )
}

export default MainContent
