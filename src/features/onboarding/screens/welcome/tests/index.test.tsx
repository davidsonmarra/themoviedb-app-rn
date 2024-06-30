import {render, screen} from '@testing-library/react-native';
import React from 'react';
import WelcomeScreen from '..';

const renderContainerInstance = (props: any) => {
  const instance = render(<WelcomeScreen {...props} />);
  return instance.root;
};

describe('WelcomeScreen', () => {
  it('should render WelcomeContainer', () => {
    const container = renderContainerInstance({}).children;
    expect(container).toBeTruthy();
  });

  it('should call onPressContinue when button is pressed', () => {
    const navigateToMovies = jest.fn();
    renderContainerInstance({
      navigation: {
        navigate: navigateToMovies,
      },
    });
    const button = screen.getByTestId('button-continue');
    button.props.onClick();
    expect(navigateToMovies).toHaveBeenCalledWith('Movies');
  });
});
