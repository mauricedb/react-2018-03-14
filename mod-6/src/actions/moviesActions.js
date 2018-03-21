export const moviesLoaded = movies => ({
  type: 'MOVIES_LOADED',
  payload: movies
});

export const loadMovies = () => async dispatch => {
  console.log('load movies')
  const rsp = await fetch('/movies.json');
  const movies = await rsp.json();
  const moviesLoadedAction = moviesLoaded(movies);
  dispatch(moviesLoadedAction);
};
