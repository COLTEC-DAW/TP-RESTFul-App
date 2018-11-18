import React, { Component } from 'react';
import Carousel from '../../components/Carousel'
import { Container} from 'reactstrap'
import NavBar from '../../components/NavBar'

import Events from '../../components/Events'


class Home extends Component {

  render() {

    return (
      <Container fluid={true} className="App p-0">
        <NavBar />
        <Carousel/>
        <Events/>
      </Container>
    );
  }
}

export default Home;
