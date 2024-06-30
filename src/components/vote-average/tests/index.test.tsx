import React from 'react';
import {render, screen} from '@testing-library/react-native';
import VoteAverage from '..';
import {Text} from '../..';
import getStyles from '../styles';
import textStyles from '../../text/styles';
import {colors} from '../../../configs/theme';

const mockBadAverage = 3;
const createComponent = (average: number = mockBadAverage) =>
  render(<VoteAverage voteAverage={average} />);

describe('Button', () => {
  it('renders correctly', () => {
    const tree = createComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders text correctly', () => {
    const instance = createComponent().root;
    expect(instance.findByType(Text)).toBeTruthy();
  });

  it('should render bad average', () => {
    createComponent();
    const averageContainer = screen.getByTestId('average-container');
    const averageText = screen.getByTestId('average-text');
    expect(averageContainer.props.style).toStrictEqual(
      getStyles(colors.error).container,
    );
    expect(averageText.props.style).toStrictEqual([
      textStyles.title,
      getStyles(colors.error).average,
    ]);
  });

  it('should render good average', () => {
    createComponent(8);
    const averageContainer = screen.getByTestId('average-container');
    const averageText = screen.getByTestId('average-text');
    expect(averageContainer.props.style).toStrictEqual(
      getStyles(colors.success).container,
    );
    expect(averageText.props.style).toStrictEqual([
      textStyles.title,
      getStyles(colors.success).average,
    ]);
  });

  it('should render warning average', () => {
    createComponent(5);
    const averageContainer = screen.getByTestId('average-container');
    const averageText = screen.getByTestId('average-text');
    expect(averageContainer.props.style).toStrictEqual(
      getStyles(colors.warning).container,
    );
    expect(averageText.props.style).toStrictEqual([
      textStyles.title,
      getStyles(colors.warning).average,
    ]);
  });
});
