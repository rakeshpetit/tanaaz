import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import FlexNav from './FlexNav';
import Container from './Container';

class App extends Component {
  render() {
    return (      
      <div className="App">
        <div>
          <div className="top-navbar">
            <div className="container">
              <div className="row">
                <nav className="desktop_menu">
                  <FlexNav />
                </nav>
              </div>
              {/*Mobile menu--------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
              <nav className="mobile_menu">
                <div className="mobile_flex">
                  <div className="flex_m m_search">
                    <img src="assets/search_icon.png" />
                  </div>
                  <div className="flex_m logo_m">
                    <a href="javascript:void(0);">
                      <img src="assets/logo.png" alt />
                    </a>
                  </div>
                  <div className="flex_m ham">
                    <div className="m_lines" />
                    <div className="m_lines" />
                    <div className="m_lines" />
                  </div>
                </div>
                <div className="mobile_drop">
                  <ul className="mobile_li">
                    <li className="sub_li">
                      <a style={{ textAlign: "center" }}>Products</a>
                      <i className="arrow_i" />
                      <ul className="inner_ul">
                        <li className="sub_li">
                          <a href="javascript:void(0);">Door hardware</a>
                          <i className="arrow_i" />
                          <ul className="child_ul">
                            <li className="child_ul_sub">Levers</li>
                            <li className="child_ul_sub">Knobs</li>
                            <li className="child_ul_sub">Pulls</li>
                            <li className="child_ul_sub">Escutcheons</li>
                          </ul>
                        </li>
                        <li className="sub_li">
                          <a href="javascript:void(0);">
                            Sliding door hardware
                          </a>
                          <i className="arrow_i" />
                          <ul className="child_ul">
                            <li className="child_ul_sub">Flush Pulls</li>
                            <li className="child_ul_sub">Lift &amp; Slide</li>
                            <li className="child_ul_sub">Pocket Door Locks</li>
                          </ul>
                        </li>
                        <li className="sub_li">
                          <a href="javascript:void(0);">Door Accessories</a>
                          <i className="arrow_i" />
                          <ul className="child_ul">
                            <li className="child_ul_sub">Hinges</li>
                            <li className="child_ul_sub">Finials</li>
                            <li className="child_ul_sub">Clavos</li>
                            <li className="child_ul_sub">Hinge Straps</li>
                            <li className="child_ul_sub">Corner Brackets</li>
                            <li className="child_ul_sub">Door bolts</li>
                            <li className="child_ul_sub">Door stops</li>
                            <li className="child_ul_sub">Push Plates</li>
                            <li className="child_ul_sub">Kickplates</li>
                            <li className="child_ul_sub">Door Knockers</li>
                          </ul>
                        </li>
                        <li className="sub_li">
                          <a href="javascript:void(0);">Cabinet Hardware</a>
                          <i className="arrow_i" />
                          <ul className="child_ul">
                            <li className="child_ul_sub">Knobs</li>
                            <li className="child_ul_sub">Roses</li>
                            <li className="child_ul_sub">Bin Pulls</li>
                            <li className="child_ul_sub">Pulls</li>
                          </ul>
                        </li>
                        <li className="sub_li">
                          <a href="javascript:void(0);">Home Accessories</a>
                          <i className="arrow_i" />
                          <ul className="child_ul">
                            <li className="child_ul_sub">Hooks</li>
                            <li className="child_ul_sub">House Numbers</li>
                          </ul>
                        </li>
                        <li className="no_ul" />
                        <li>
                          <a style={{ backgroundColor: "#f9f9f9" }}>
                            Window Hardware
                          </a>
                        </li>
                        <li className="no_ul" />
                        <li>
                          <a style={{ backgroundColor: "#f9f9f9" }}>
                            Customization
                          </a>
                        </li>
                        <li className="no_ul" />
                        <li>
                          <a style={{ backgroundColor: "#f9f9f9" }}>Locks</a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub_li">
                      <a style={{ textAlign: "center" }}>About us</a>
                      <i className="arrow_i" />
                      <ul className="inner_ul">
                        <li>
                          <a style={{ backgroundColor: "#f9f9f9" }}>History</a>
                        </li>
                        <li>
                          <a style={{ backgroundColor: "#f9f9f9" }}>Process</a>
                        </li>
                        <li>
                          <a style={{ backgroundColor: "#f9f9f9" }}>Patina</a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub_li">
                      <a style={{ textAlign: "center" }}>Contact</a>
                      <i className="arrow_i" />
                      <ul className="inner_ul">
                        <li>
                          <a style={{ backgroundColor: "#f9f9f9" }}>Contact</a>
                        </li>
                        <li>
                          <a style={{ backgroundColor: "#f9f9f9" }}>
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          {/* slide show */}
         <Container />
          <div className="bgLayer" />
          <footer>
            <div className="container">
              <div className="footerStyle">
                <p className="text-right">
                  <a href="policy.html">Policy</a>
                  <span style={{ fontSize: 13 }}>
                    {" "}
                    © 2018 Taanaz Bronzze Pvt Ltd
                  </span>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>      
    );
  }
}

export default App;
