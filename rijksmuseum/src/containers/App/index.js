import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar'
import Carousel from '../../components/Carousel'



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Carousel/>
      </div>
    );
  }
}

export default App;
