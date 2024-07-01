import React from 'react';
import SearchContainer from '..';
import {render, screen} from '@testing-library/react-native';
import {mockListMovie} from '../../../../../../../__mocks__';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: mockGoBack}),
}));

const containerInstance = (props: any) =>
  render(<SearchContainer {...props} />);

describe('SearchContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const container = containerInstance({
      search: '',
      searchedMoviesData: mockListMovie,
      loadingFetchSearchMovies: false,
      onEndReached: jest.fn(),
      setSearch: jest.fn(),
      onSearchMovies: jest.fn(),
      onPressMovie: jest.fn(),
    }).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should render movie details', () => {
    containerInstance({
      search: '',
      searchedMoviesData: mockListMovie,
      loadingFetchSearchMovies: false,
      onEndReached: jest.fn(),
      setSearch: jest.fn(),
      onSearchMovies: jest.fn(),
      onPressMovie: jest.fn(),
    });
    const title = screen.getByText(mockListMovie[0].title);
    expect(title).toBeTruthy();
  });

  it('should call onSearchMovies when search button is pressed', () => {
    const onSearchMovies = jest.fn();
    containerInstance({
      search: '',
      searchedMoviesData: mockListMovie,
      loadingFetchSearchMovies: false,
      onEndReached: jest.fn(),
      setSearch: jest.fn(),
      onSearchMovies,
      onPressMovie: jest.fn(),
    });
    const button = screen.getByTestId('search-button');
    button.props.onClick();
    expect(onSearchMovies).toHaveBeenCalled();
  });

  it('should call onPressMovie when movie is pressed', () => {
    const onPressMovie = jest.fn();
    containerInstance({
      search: '',
      searchedMoviesData: mockListMovie,
      loadingFetchSearchMovies: false,
      onEndReached: jest.fn(),
      setSearch: jest.fn(),
      onSearchMovies: jest.fn(),
      onPressMovie,
    });
    const movie = screen.queryAllByTestId('movie-card');
    movie[0].props.onClick();
    expect(onPressMovie).toHaveBeenCalled();
  });
});
