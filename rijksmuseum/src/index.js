import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import ArtWork from './containers/ArtWork';
import NotFound from './containers/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/art-work/:id" component={ArtWork} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/*" component={NotFound} />


      </Switch>
  </ BrowserRouter>,
   document.getElementById('root')

 );
