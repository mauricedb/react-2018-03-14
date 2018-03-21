const noOp = state => state;

const reducers = {
  MOVIES_LOADED: (state, action) => action.payload,
  MOVIES_UNLOAD: () => []
};

export default (state = [], action) => {
  console.log('moviesReducer', state, action);

  const reducer = reducers[action.type] || noOp;
  return reducer(state, action);

  // switch (action.type) {
  //   case 'MOVIES_LOADED':
  //     return action.payload;
  // }

  return state;
};
