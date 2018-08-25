import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col>
               <p>welocme screen</p>
               <Link to="/checkout" >checkout</Link>
            </Col>
          </Row>
       </Grid>
      </div>
    );
  }
}

export default App;
