import React, { Component } from 'react';
import MoviesPresentation from './MoviesPresentation';

class MoviesContainer extends Component {
  state = { movies: [] };
  async componentDidMount() {
    const rsp = await fetch('/movies.json');
    const movies = await rsp.json();
    this.setState({ movies });
  }
  deleteMovie = movie => {
    const movies = this.state.movies.filter(m => m !== movie);
    this.setState({ movies });
  };

  render() {
    const { movies } = this.state;
    console.log('MoviesContainer render')

    return (
      <MoviesPresentation movies={movies} deleteMovie={this.deleteMovie} />
    );
  }
}

export default MoviesContainer;
