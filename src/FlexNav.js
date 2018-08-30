import React, { Component } from 'react'
import logo from "./assets/Logo.png";
import {
  Link
} from 'react-router-dom'
import ContactMenu from './menu/ContactMenu';
import ProductMenu from './menu/ProductMenu';
import AboutMenu from './menu/AboutMenu';

export class FlexNav extends Component {
  constructor(props) {
    super(props);
    this.state = { contact: false, about: false, product: false};
  }

  productMouseEnter = () => {
    this.setState({ contact: false, product: true, about: false });
  }

  productMouseLeave = () => {
    this.setState({ contact: false, product: false, about: false });
  }

  aboutMouseEnter = () => {
    this.setState({ contact: false, product: false, about: true });
  }

  aboutMouseLeave = () => {
    this.setState({ contact: false, product: false, about: false });
  }

  contactMouseEnter = () => {
    this.setState({ contact: true, product: false, about: false });
  }

  contactMouseLeave = () => {
    this.setState({ contact: false, product: false, about: false });
  }

  shouldComponentUpdate(nextProps, nextState){
    const updateState =  !(
      (nextState.product === this.state.product) &&
      (nextState.about === this.state.about) &&
      (nextState.contact === this.state.contact)
    );
    return updateState;
  }

  render() {
    return (
      <div>
      <ul className="flex_navbar">
        {/*Product menu*/}
        <li className="flex_li">
            <a 
              onMouseEnter={this.productMouseEnter}
              onMouseLeave={this.productMouseLeave}
              // href="JavaScript:void(0);" 
              className="nav-title">
              Products
          </a>          
        </li>
        {/*AboutUs menu*/}
        <li className="flex_li">
          <a 
          onMouseEnter={this.aboutMouseEnter}
          onMouseLeave={this.aboutMouseLeave}
          // href="JavaScript:void(0);" 
          className="nav-title">
            About Us
          </a>
        </li>
        {/*Logo Home*/}        
        <li className="flex_li">
          <a href="index.html">
          <Link to="/"> 
            <img src={logo} alt="Tannaaz" />
            </Link>
          </a>
        </li>
        
        {/*Contact*/}
        <li className="flex_li">
          <a 
          onMouseEnter={this.contactMouseEnter}
          onMouseLeave={this.contactMouseLeave}
          // href="JavaScript:void(0);" 
          className="nav-title">
            Contact
          </a>
          
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
    menuMouseEnter={this.productMouseEnter}
    menuMouseLeave={this.productMouseLeave}
    /> }
    {this.state.about && 
    <AboutMenu 
    menuMouseEnter={this.aboutMouseEnter}
    menuMouseLeave={this.aboutMouseLeave}
    /> }
    {this.state.contact && 
    <ContactMenu 
    menuMouseEnter={this.contactMouseEnter}
    menuMouseLeave={this.contactMouseLeave}
    /> }
    </div>
    )
  }
}

export default FlexNav
