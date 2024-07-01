import React from 'react';
import ListContainer from '..';
import {render, screen} from '@testing-library/react-native';
import {mockCardMovie, mockListMovie} from '../../../../../../../__mocks__';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: mockGoBack}),
}));

const containerInstance = (props: any) => render(<ListContainer {...props} />);

describe('ListContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const container = containerInstance({
      moviesData: mockCardMovie,
      loadingFetchMovies: false,
      onEndReached: jest.fn(),
      onPressMovie: jest.fn(),
      onSearch: jest.fn(),
    }).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should render movie details', () => {
    containerInstance({
      moviesData: mockListMovie,
      loadingFetchMovies: false,
      onEndReached: jest.fn(),
      onPressMovie: jest.fn(),
      onSearch: jest.fn(),
    });
    const title = screen.getByText(mockCardMovie.title);
    expect(title).toBeTruthy();
  });

  it('should call onEndReached when end of list is reached', () => {
    const onEndReached = jest.fn();
    containerInstance({
      moviesData: mockListMovie,
      loadingFetchMovies: false,
      onEndReached,
      onPressMovie: jest.fn(),
      onSearch: jest.fn(),
    });
    const flatList = screen.getByTestId('movies-flatlist');
    flatList.props.onEndReached();
    expect(onEndReached).toHaveBeenCalled();
  });

  it('should call onSearch when search icon is pressed', () => {
    const onSearch = jest.fn();
    containerInstance({
      moviesData: mockListMovie,
      loadingFetchMovies: false,
      onEndReached: jest.fn(),
      onPressMovie: jest.fn(),
      onSearch,
    });
    const searchIcon = screen.getByTestId('right-buton-icon');
    searchIcon.props.onClick();
    expect(onSearch).toHaveBeenCalled();
  });
});
