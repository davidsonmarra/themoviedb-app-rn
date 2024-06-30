import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Input from '..';
import styles from '../styles';

const renderComponent = (props: any) => render(<Input {...props} />);

describe('Input', () => {
  it('renders correctly', () => {
    const tree = renderComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call setValue', () => {
    const mockSetValue = jest.fn();
    renderComponent({
      value: '',
      setValue: mockSetValue,
    });
    const input = screen.getByTestId('input');
    input.props.onChangeText('test');
    expect(mockSetValue).toHaveBeenCalledWith('test');
  });

  it('should set the value on call onChangeText', () => {
    let mockValue = '';
    const mockSetValue = jest
      .fn()
      .mockImplementation(value => (mockValue = value));
    renderComponent({
      value: mockValue,
      setValue: mockSetValue,
    });
    const input = screen.getByTestId('input');
    input.props.onChangeText('test');
    expect(mockValue).toBe('test');
  });

  it('should call onPress', () => {
    const mockOnPress = jest.fn();
    renderComponent({
      onSearch: mockOnPress,
    });
    const button = screen.getByTestId('search-button');
    button.props.onClick();
    expect(mockOnPress).toHaveBeenCalled();
  });
});
