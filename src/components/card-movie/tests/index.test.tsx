import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {mockCardMovie} from '../../../../__mocks__';
import CardMovie from '..';

const renderComponent = (props: any) => render(<CardMovie {...props} />);

describe('CardMovie', () => {
  it('renders correctly', () => {
    const tree = renderComponent({movie: mockCardMovie}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    renderComponent({movie: mockCardMovie});
    const title = screen.getByText(mockCardMovie.title);
    expect(title.children).toEqual([mockCardMovie.title]);
  });

  it('should call onPress', () => {
    const onPressCard = jest.fn();
    const button = renderComponent({
      movie: mockCardMovie,
      onPressCard,
    }).root;
    button.props.onClick();
    expect(onPressCard).toHaveBeenCalledWith(mockCardMovie);
  });
});
