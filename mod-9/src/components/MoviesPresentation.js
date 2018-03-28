import React, { Component } from 'react';
import MovieItem from './MovieItem';
class MoviesPresentation extends Component {
  render() {
    const { movies, deleteMovie } = this.props;
    return (
      <ul>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} deleteMovie={deleteMovie} />
        ))}
      </ul>
    );
  }
}

export default MoviesPresentation;
