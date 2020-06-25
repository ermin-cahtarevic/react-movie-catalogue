import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from '../containers/MovieList';
import Movie from '../containers/Movie';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/movie">
          <Movie />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
