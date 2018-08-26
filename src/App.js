import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
     
        <Grid>
          <Row>
            <Col>
               <p>welocme screen</p>
               <Link to="/checkout" >checkout</Link>
            </Col>
          </Row>
       </Grid>
     
    );
  }
}

export default App;
