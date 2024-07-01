import React from 'react';
import {render, screen} from '../../../../../configs/test-utils';
import {mockCardMovie} from '../../../../../../__mocks__';
import DetailsScreen from '..';

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
  const instance = render(<DetailsScreen {...props} />);
  return instance;
};

describe('DetailsScreen', () => {
  it('should render DetailsContainer', () => {
    const container = renderContainerInstance({
      route: mockRoute,
    }).root.children;
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

  it('should render movie details', () => {
    renderContainerInstance({
      route: mockRoute,
    });
    const title = screen.getByText(mockCardMovie.title);
    expect(title).toBeTruthy();
  });
});
