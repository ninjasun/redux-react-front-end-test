import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>welocme screen</p>
        <Link to="/checkout" >checkout</Link>
      </div>
    );
  }
}

export default App;
