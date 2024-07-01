import React from 'react';
import {
  screen,
  renderWithCustomProviders,
} from '../../../../../configs/test-utils';
import {
  mockCardMovie,
  mockPreloadedStateFilled,
} from '../../../../../../__mocks__';
import SearchScreen from '..';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: mockGoBack}),
}));
const mockRoute = {
  params: {
    movie: mockCardMovie,
  },
};

const renderContainerInstance = (props: any) => {
  const instance = renderWithCustomProviders(
    <SearchScreen {...props} />,
    mockPreloadedStateFilled,
  );
  return instance;
};

describe('SearchScreen', () => {
  it('should render SearchContainer', () => {
    const container = renderContainerInstance({
      route: mockRoute,
    }).render.root.children;
    expect(container).toBeTruthy();
  });

  it('should call goBack when button is pressed', () => {
    renderContainerInstance({
      route: mockRoute,
    });
    const button = screen.getByTestId('back-button');
    button.props.onClick();
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('should render list of movies', () => {
    const {store} = renderContainerInstance({
      route: mockRoute,
    });
    const list = screen.getByTestId('movies-flatlist');
    expect(list.props.data).toStrictEqual(
      store.getState().movies.searchedMoviesData,
    );
  });
});
