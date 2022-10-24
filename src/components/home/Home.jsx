import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Blogs from '../blogs/Blogs.jsx'

function Home({ setPage, setHamburger }) {

    return (
        <div className="homeContainer" style={{ height: window.innerHeight }}>
            <img src="DronePhoto/DJI_0224.jpg" className="homePageBanner" />
            <div className="logo">
                <div className="title">Jay and the Sky</div>
                <div className="homeButton" onClick={(e) => { setHamburger(false) }}>
                    <Link to="aboutme" className="hamburgerAnchor" style={{ textDecoration: 'none', color: 'inherit' }} onClick={(e) => { setHamburger(false) }}>Software Engineering</Link>
                </div>
                <br/>
                <div className="homeButton" onClick={(e) => { setHamburger(false) }}>
                    <Link to="socialmedia"  className="hamburgerAnchor" style={{ textDecoration: 'none', color: 'inherit' }} onClick={(e) => { setHamburger(false) }}>Social Media</Link>
                </div>
                <br></br>
                <div className="homeButton" onClick={(e) => {
                    window.open('CV_Joel_Hench.pdf');
                }}>Resume</div>
            </div>

        </div>
    )
}

export default Home;