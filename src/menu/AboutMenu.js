import React from 'react'
import {
    Link
  } from 'react-router-dom'
  
const AboutMenu = (props) => {
  return (
    <div 
    onMouseEnter={props.menuMouseEnter} 
    onMouseLeave={props.menuMouseLeave} 
    style={{backgroundColor: 'white', position: 'absolute'}}>           
            <div className="aboutSec">
              <ul className="navBlock">
                <li className="mainCategory">
                  <a href="aboutUs_history.html">History</a>
                </li>
                <li className="mainCategory">
                  <a href="aboutUs_process.html">Process</a>
                </li>
                <li className="mainCategory">
                  <a href="aboutUs_patina.html">Patina</a>
                </li>
              </ul>
            </div>
          </div>
  )
}

export default AboutMenu

