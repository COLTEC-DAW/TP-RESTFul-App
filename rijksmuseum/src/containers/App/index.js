import React, { Component } from 'react'
import './App.css'
import Home from '../Home'
import ArtWork from '../ArtWork'
import Search from '../Search'
import NotFound from '../NotFound'
import { BrowserRouter, Switch, Route } from 'react-router-dom'



class App extends Component {
  render() {

    let root = document.getElementById('root')
    let width = document.body.clientWidth;
    root.width = width
    root.style.width = width

    let body = document.getElementsByTagName('body')
    body[0].style.width = width
    body[0].style.overflow = "hidden"

    console.log(body[0].style)


    return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/art-work/:id" component={ArtWork} />
              <Route path="/search/:sorting/:query/:page" component={Search} />
              <Route path="/*" component={NotFound} />
          </Switch>
      </ BrowserRouter>
    )
  }
}

export default App;
