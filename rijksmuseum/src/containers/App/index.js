import React, { Component } from 'react'
import './App.css'
import NavBar from '../../components/NavBar'
import Home from '../Home'
import ArtWork from '../ArtWork'
import Search from '../Search'
import NotFound from '../NotFound'
import Carousel from '../../components/Carousel'
import { Container, Row, Col } from 'reactstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <Container fluid={true} className="App">
        <NavBar />
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/art-work/:id" component={ArtWork} />
                <Route path="/search/:sorting/:query/:page" component={Search} />
                <Route path="/*" component={NotFound} />
            </Switch>
        </ BrowserRouter>
      </Container>
    )
  }
}

export default App;
