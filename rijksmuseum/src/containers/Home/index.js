import React, { Component } from 'react';
import NavBar from '../../components/NavBar'
import Carousel from '../../components/Carousel'
import { Container, Row, Col } from 'reactstrap'



class App extends Component {
  render() {
    return (
      <Container fluid={true} className="App">
        <NavBar/>
        <Carousel/>
      </Container>
    );
  }
}

export default App;
