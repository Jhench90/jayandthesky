import {useState, useEffect, Fragment} from 'react';
import { Routes, Route, Link, Switch, Outlet } from 'react-router-dom';


export default function App() {
  const [hamburger, setHamburger] = useState(false)
  return (
    <Fragment>
        <Outlet/>
        <br></br>
        {/* <div className="copyrightApp" style={{ margin: 'auto' }}>© 2022 Jay.andthesky. Made possible with React.js, ArangoDB, and DJI.</div> */}
        <img src="DronePhoto/Hamburger_icon.svg" className="hamburgerIcon" onClick={(e) => {
          if (hamburger) { setHamburger(false); } 
          else { setHamburger(true); }
        }} />
        {hamburger ?
          <div className="hamburgerMenu">
            <div className="hamburgerMenuButton" onClick={(e) => { setHamburger(false) }}>X</div>
            <div className="hamburgerMenuButton" onClick={(e) => { setHamburger(false) }}>
              <Link to="/" className="hamburgerAnchor" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            </div>
            {/* <div className="hamburgerMenuButton" onClick={(e) => { setHamburger(false) }}>
              <Link to="aerialdrone" className="hamburgerAnchor" style={{ textDecoration: 'none', color: 'inherit' }}>Aerial Drone</Link>
            </div> */}
            <div className="hamburgerMenuButton" onClick={(e) => { setHamburger(false) }}>
              <Link to="blog/post/Intro-to-Redux" className="hamburgerAnchor" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link>
            </div>
            <div className="hamburgerMenuButton" onClick={(e) => { setHamburger(false) }}>
              <Link to="productivity" className="hamburgerAnchor" style={{ textDecoration: 'none', color: 'inherit' }}>Productivity</Link>
            </div>
            <div className="hamburgerMenuButton" onClick={(e) => { setHamburger(false) }}>
              <Link to="social-media" className="hamburgerAnchor" style={{ textDecoration: 'none', color: 'inherit' }}>Social Media</Link>
            </div>
            <div className="hamburgerMenuButton" onClick={(e) => { setHamburger(false)
            }}>
              <Link to="about-me" className="hamburgerAnchor" style={{ textDecoration: 'none', color: 'inherit' }}>Software Engineering</Link>
            </div>
          </div>
          : null}
    </Fragment>
  )
}
