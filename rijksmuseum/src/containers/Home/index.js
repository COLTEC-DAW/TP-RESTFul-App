import React, { Component } from 'react';
import Carousel from '../../components/Carousel'
import NavBar from '../../components/NavBar'

import Events from '../../components/Events'


class Home extends Component {

  render() {

    return (
      <div style={{'overflow': 'hidden'}} className="App p-0">
        <NavBar />
        <Carousel className="mt-2" />
        <Events/>
      </div>
    );
  }
}

export default Home;
