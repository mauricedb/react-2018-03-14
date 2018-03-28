import React from 'react';
import { shallow } from 'enzyme';
import reactTestRenderer from 'react-test-renderer';

import MoviesPresentation from './MoviesPresentation';
import MovieItem from './MovieItem';

test('Renders 2 movies', () => {
  const wrapper = shallow(
    <MoviesPresentation
      movies={[
        {
          id: 1,
          title: 'Een'
        },
        {
          id: 2,
          title: 'Twee'
        }
      ]}
    />
  );
  expect(wrapper.find(MovieItem).length).toBe(2);
});

test('Passes the right props', () => {
  const wrapper = shallow(
    <MoviesPresentation
      deleteMovie={() => {}}
      movies={[
        {
          id: 1,
          title: 'Een'
        },
        {
          id: 2,
          title: 'Twee'
        }
      ]}
    />
  );
  const w2 = wrapper
    .find(MovieItem)
    .first()
    .dive();

  w2.find('button').simulate('click');
});

test('Can delete movies', () => {
  const deleteMock = jest.fn();
  const wrapper = shallow(
    <MovieItem
      deleteMovie={deleteMock}
      movie={{
        id: 1,
        title: 'Een'
      }}
    />
  );

  wrapper.find('button').simulate('click');

  expect(deleteMock).toBeCalled();
});

test('Should match snapshot', () => {
  const tree = reactTestRenderer
    .create(
      <MovieItem
        movie={{
          id: 1,
          title: 'Een'
        }}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
