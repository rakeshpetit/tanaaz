import React, { Component } from 'react'
import logo from "./assets/Logo.png";
import ProductMenu from './menu/ProductMenu';

export class FlexNav extends Component {
  constructor(props) {
    super(props);
    this.state = {product: false};
  }

  productMouseEnter = () => {
    console.log('productMouseEnter')
    
    this.setState({ product: true });
  }

  productMouseLeave = () => {
    console.log('productMouseLeave')
    this.setState({ product: false });
  }

  render() {
    return (
      <div>
      <ul className="flex_navbar">
        {/*Product menu*/}
        <li className="flex_li">
            <a 
              // onMouseEnter={() => { this.productMouseEnter()}}
              onMouseEnter={this.productMouseEnter}
              onMouseLeave={() => { this.productMouseLeave()}}
              href="JavaScript:void(0);" className="nav-title">
              Products
          </a>          
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
    {this.state.product && 
    <ProductMenu 
    productMouseEnter={this.productMouseEnter}
    productMouseLeave={this.productMouseLeave}
    /> }
    </div>
    )
  }
}

export default FlexNav
