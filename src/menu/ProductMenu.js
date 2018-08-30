import React from 'react'
import {
    Link
  } from 'react-router-dom'
  
const ProductMenu = (props) => {
  return (
    <div 
    onMouseEnter={props.productMouseEnter} 
    onMouseLeave={props.productMouseLeave} 
    style={{backgroundColor: 'white', position: 'absolute'}}>
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
  )
}

export default ProductMenu
