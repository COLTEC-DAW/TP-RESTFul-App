import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import ArtWork from './containers/ArtWork';
import Search from './containers/Search';
import NotFound from './containers/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/art-work/:id" component={ArtWork} />
          <Route path="/search/:sorting/:query" component={Search} />
          <Route path="/*" component={NotFound} />
          <Route path="/not-found" component={NotFound} />



      </Switch>
  </ BrowserRouter>,
   document.getElementById('root')
);
