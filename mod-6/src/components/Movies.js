import React, { Component } from 'react';
import { connect } from 'react-redux';

import { moviesLoaded, loadMovies } from '../actions/moviesActions';

class Movies extends Component {
//   async componentDidMount() {
//     // const rsp = await fetch('/movies.json');
//     // const movies = await rsp.json();
//     // // const moviesLoadedAction = moviesLoaded(movies);
//     // // this.props.dispatch(moviesLoadedAction);
//     // this.props.moviesLoaded(movies);
//   }

//   loadMovies = () => this.props.loadMovies();

  render() {
    const { movies, loadMovies } = this.props;

    console.log(this.props);
    return (
      <div>
        <h2>Movies</h2>
        <button onClick={loadMovies}>Load movies</button>
        <ul>{movies.map(movie => <li key={movie.id}>{movie.title}</li>)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});
const mapDispatchToProps = dispatch => ({
//   moviesLoaded: movies => dispatch(moviesLoaded(movies)),
  loadMovies: () => dispatch(loadMovies())
});
const hoc = connect(mapStateToProps, mapDispatchToProps);
export default hoc(Movies);
