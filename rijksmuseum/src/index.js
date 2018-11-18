import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Home from './containers/Home';
import ArtWork from './containers/ArtWork';
import Search from './containers/Search';
import NotFound from './containers/NotFound';
import Carousel from './components/Carousel';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" component={Home} />
          <Route path="/art-work/:id" component={ArtWork} />
          <Route path="/search/:sorting/:query/:page" component={Search} />
          <Route path="/*" component={NotFound} />
      </Switch>
  </ BrowserRouter>,
   document.getElementById('root')

);
