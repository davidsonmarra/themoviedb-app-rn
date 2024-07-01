import React from 'react';
import {
  renderWithCustomProviders,
  screen,
} from '../../../../../configs/test-utils';
import {
  mockCardMovie,
  mockListMovie,
  mockPreloadedStateFilled,
} from '../../../../../../__mocks__';
import ListScreen from '..';

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
    <ListScreen {...props} />,
    mockPreloadedStateFilled,
  );
  return instance;
};

describe('ListScreen', () => {
  it('should render ListContainer', () => {
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

  it('should render movies', () => {
    const {
      render: {getByText},
    } = renderContainerInstance({navigation: jest.fn()});
    expect(getByText(mockCardMovie.title)).toBeTruthy();
  });

  it('should load store correctly', () => {
    const {render, store} = renderContainerInstance({navigation: jest.fn()});
    expect(store.getState().movies.moviesData).toStrictEqual(mockListMovie);
  });
});
