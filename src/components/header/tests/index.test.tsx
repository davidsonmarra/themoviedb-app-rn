import React from 'react';
import {TouchableOpacity} from 'react-native';
import Header, {Props} from '..';
import {Text} from '../..';
import {render, screen} from '@testing-library/react-native';
import {SearchIcon} from '../../../assets/icons';

const mockText = 'Snapshot test!';
const createComponent = ({text = mockText, onBack, ...rest}: Props) =>
  render(<Header text={text} onBack={onBack} {...rest} />);

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: mockGoBack}),
}));

describe('Button', () => {
  it('renders correctly', () => {
    const tree = createComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders text correctly', () => {
    const instance = createComponent({}).root;
    expect(instance.findByType(Text)).toBeTruthy();
  });

  it('should call goBack', () => {
    createComponent({onBack: mockGoBack}).root;
    const backButton = screen.getByTestId('back-button');
    backButton.props.onClick();
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('should call onBack when press back icon', () => {
    const instance = createComponent({onBack: mockGoBack}).root;
    const backIcon = instance.findAllByType(TouchableOpacity)[0];
    backIcon.props.onPress();
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('should call rightIconAction when press right icon', () => {
    const mockRightIconAction = jest.fn();
    createComponent({
      rightIcon: () => <SearchIcon />,
      rightIconAction: mockRightIconAction,
    });
    const rightIcon = screen.getByTestId('right-buton-icon');
    rightIcon.props.onClick();
    expect(mockRightIconAction).toHaveBeenCalled();
  });
});
