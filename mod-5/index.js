// const data = [1, 2, 3, 4, 5];

// const sum = data.reduce((previous, current) => {
//   console.log(previous, current);
//   return previous + current;
// }, 0);

// console.log(sum);

// return;

function changeName(name) {
  const action = {
    type: 'CHANGE_NAME',
    payload: name
  };
  return action;
}

const subscriptions = [];
const reducers = [];

let state = {
  count: 0,
  person: {
    firstName: null,
    lastName: 'de Beijer'
  }
};

function dispatch(action) {
  state = reducers.reduce((state, reducer) => reducer(state, action), state);
  subscriptions.forEach(subscription => subscription(state));
}


subscriptions.push(state => console.log(state));

reducers.push((state, action) => {
  if (action.type === 'CHANGE_NAME') {
    const person = { ...state.person, firstName: action.payload };

    return { ...state, person };
  }

  return state;
});

reducers.push((state, action) => {
  return { ...state, count: state.count + 1 };
});

const changeNameAction = changeName('Maurice');
dispatch(changeNameAction);
dispatch(changeNameAction);
dispatch(changeNameAction);
dispatch(changeNameAction);

// console.log(state);
