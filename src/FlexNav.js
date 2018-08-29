import React from 'react'
import {
  Link
} from 'react-router-dom'
import logo from "./assets/Logo.png";

const FlexNav = () => {
  return <div>
      <ul className="flex_navbar">
        {/*Product menu*/}
        <li className="flex_li">
          <a href="JavaScript:void(0);" className="nav-title">
            Products
          </a>
          <div className="categeory_block">
            <div className="innerCategory">
              <ul className="navBlock">
                <li className="mainCategory">Door Hardware</li>
                <li className="subCategory">
                  <Link to={{ pathname: "/product", search: '?prod=Lever',  }}>                    
                    Levers
                  </Link>
                </li>
                <li className="subCategory">
                <Link to={{ pathname: "/product", search: '?prod=Knobs',  }}>                    
                    Knobs
                  </Link>
                  </li>
                <li className="subCategory">Pulls</li>
                <li className="subCategory">Escutcheons</li>
                <br />
                <li className="mainCategory">Sliding door hardware</li>
                <li style={{ textAlign: "left" }}>Flush Pulls</li>
                <li style={{ textAlign: "left" }}>Lift &amp; Slide</li>
                <li style={{ textAlign: "left" }}>Pocket Door Locks</li>
              </ul>
              <ul className="navBlock">
                <li className="mainCategory">Door Accessories</li>
                <li className="subCategory">Hinges</li>
                <li className="subCategory">Finials</li>
                <li className="subCategory">Clavos</li>
                <li className="subCategory">Hinge Straps</li>
                <li className="subCategory">Corner Brackets</li>
                <li className="subCategory">Door bolts</li>
                <li className="subCategory">Door stops</li>
                <li className="subCategory">Push Plates</li>
                <li className="subCategory">Kickplates</li>
                <li className="subCategory">Door Knockers</li>
              </ul>
              <ul className="navBlock">
                <li className="mainCategory">Cabinet Hardware</li>
                <li className="subCategory">Knobs</li>
                <li className="subCategory">Roses</li>
                <li className="subCategory">Bin Pulls</li>
                <li className="subCategory">Pulls</li>
                <br />
                <li className="mainCategory">Home Accessories</li>
                <li className="subCategory">Hooks</li>
                <li className="subCategory">House Numbers</li>
                <br />
                <li className="mainCategory">Window Hardware</li>
              </ul>
              <ul className="navBlock">
                <li className="mainCategory">Customization</li>
                <br />
                <li className="mainCategory">Locks</li>
              </ul>
            </div>
          </div>
        </li>
        {/*AboutUs menu*/}
        <li className="flex_li">
          <a href="JavaScript:void(0);" className="nav-title">
            About Us
          </a>
          <div className="categeory_block">
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
        </li>
        {/*Logo Home*/}
        <li className="flex_li">
          <a href="index.html">
            <img src={logo} alt="Tannaaz" />
          </a>
        </li>
        {/*Contact*/}
        <li className="flex_li">
          <a href="JavaScript:void(0);" className="nav-title">
            Contact
          </a>
          <div className="categeory_block">
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
        </li>
        {/*Search*/}
        <li className="flex_li">
          <a href="JavaScript:void(0);" className="nav-title">
            Search
          </a>
          <div className="categeory_block">
            <div className="srchBlock">
              <div className="navBlock">
                <input type="text" id="searchtxt" name placeholder className="srchme" onkeypress="getSearchText(event,this)" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>;
}

export default FlexNav
