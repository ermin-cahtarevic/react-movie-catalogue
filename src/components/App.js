import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from '../containers/MovieList';
import Movie from '../containers/Movie';
import ScrollToTop from '../helpers/ScrollToTop';
import FourOFour from './404';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route exact path="/movie/:id">
            <Movie />
          </Route>
          <Route path="/404">
            <FourOFour />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
