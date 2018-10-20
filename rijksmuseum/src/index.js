import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import ArtWork from './containers/ArtWork';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/art-work/:id" component={ArtWork} />
      </Switch>
  </ BrowserRouter>,
   document.getElementById('root')

 );
