import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import App from './App';
import { Product } from './Product';

export class AppRouter
 extends Component {
  render() {
    return (
        <Router>
        <div>
        <Route exact path="/" component={App}/>
        <Route path="/product" component={Product}/>
      </div>
      </Router>
    )
  }
}

export default AppRouter
