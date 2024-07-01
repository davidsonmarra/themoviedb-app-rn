import React from 'react';
import DetailsContainer from '..';
import {render, screen} from '@testing-library/react-native';
import {mockCardMovie} from '../../../../../../../__mocks__';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: mockGoBack}),
}));

const containerInstance = (props: any) =>
  render(<DetailsContainer {...props} />);

describe('DetailsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const container = containerInstance({
      movie: mockCardMovie,
      genresMovie: [{id: 1, name: 'Action'}],
    }).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should render movie details', () => {
    containerInstance({
      movie: mockCardMovie,
      genresMovie: [{id: 1, name: 'Action'}],
    });
    const title = screen.getByText(mockCardMovie.title);
    expect(title).toBeTruthy();
  });
});
