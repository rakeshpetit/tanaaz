import React from 'react'

const ContactMenu = (props) => {
  return (
    <div 
    onMouseEnter={props.menuMouseEnter} 
    onMouseLeave={props.menuMouseLeave} 
    style={{backgroundColor: 'white', position: 'absolute'}}>
            <div className="cnt">
              <ul className="navBlock">
                <li className="mainCategory">
                  <a href="contact.html">Contact</a>
                </li>
                <li className="mainCategory">
                  <a href="contactUs.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
  )
}

export default ContactMenu
