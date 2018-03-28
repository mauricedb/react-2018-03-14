import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import MoviesContainer from './components/MoviesContainer';

import { shallow } from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('Really renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('header h1').text()).toBe('Movies');
});

it('Renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(MoviesContainer).length).toBe(1);
});
