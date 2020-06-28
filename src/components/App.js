import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from '../containers/MovieList';
import Movie from '../containers/Movie';
import ScrollToTop from '../helpers/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/movie/:id">
          <Movie />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
