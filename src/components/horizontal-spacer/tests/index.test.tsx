import React from 'react';
import HorizontalSpacer from '..';
import {render} from '@testing-library/react-native';

let mockWidth = 10;

const createComponent = () => render(<HorizontalSpacer width={mockWidth} />);

describe('HorizontalSpacer', () => {
  beforeEach(() => {
    mockWidth = 10;
  });

  it('renders correctly', () => {
    const tree = createComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with mockWidth correctly', () => {
    const instance = createComponent().root;
    expect(instance.props.style).toStrictEqual({width: mockWidth});
  });
});
