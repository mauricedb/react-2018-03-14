import React, { Component } from 'react';

class MovieItem extends Component {
  deleteMovie = () => {
    const { movie, deleteMovie } = this.props;
    deleteMovie(movie);
  };
  render() {
    const { movie } = this.props;
    return (
      <li className="movie-item">
        <button onClick={this.deleteMovie}>🗑</button>
        &nbsp;
        {movie.title}
      </li>
    );
  }
}

export default MovieItem;
