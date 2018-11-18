import React, { Component } from 'react';
import Carousel from '../../components/Carousel'
import { Container} from 'reactstrap'
import Events from '../../components/Events'


class Home extends Component {

  render() {

    return (
      <Container fluid={true} className="App">
        <Carousel/>
        <Events/>
      </Container>
    );
  }
}

export default Home;
