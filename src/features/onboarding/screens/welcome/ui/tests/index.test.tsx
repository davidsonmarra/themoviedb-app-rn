import React from 'react';
import WelcomeContainer from '..';
import {render, screen} from '@testing-library/react-native';

const containerInstance = (props: any) =>
  render(<WelcomeContainer {...props} />);

describe('WelcomeContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const container = containerInstance({}).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should call the onPressContinue correctly', () => {
    const onPressContinue = jest.fn();
    containerInstance({onPressContinue});
    const button = screen.getByTestId('button-continue');
    button.props.onClick();
    expect(onPressContinue).toHaveBeenCalled();
  });
});
