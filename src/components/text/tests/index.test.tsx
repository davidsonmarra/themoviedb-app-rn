import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Text, {TextType} from '..';
import styles from '../styles';

const mockText = 'Snapshot test!';
const renderComponent = (type: TextType = TextType.title) =>
  render(<Text type={type}>{mockText}</Text>);

describe('Text', () => {
  it('renders correctly', () => {
    const tree = renderComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    renderComponent();
    const text = screen.getByRole('text');
    expect(text.children).toEqual([mockText]);
  });

  it('renders title style correctly', () => {
    renderComponent(TextType.title);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toBe(styles.title);
  });

  it('renders text style correctly', () => {
    renderComponent(TextType.text);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toBe(styles.text);
  });

  it('renders textBold style correctly', () => {
    renderComponent(TextType.textBold);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toBe(styles.textBold);
  });

  it('renders buttonPrimary style correctly', () => {
    renderComponent(TextType.buttonPrimary);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toBe(styles.buttonPrimary);
  });

  it('renders buttonSecondary style correctly', () => {
    renderComponent(TextType.buttonSecondary);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toBe(styles.buttonSecondary);
  });

  it('renders label style correctly', () => {
    renderComponent(TextType.label);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toBe(styles.label);
  });

  it('renders error style correctly', () => {
    renderComponent(TextType.error);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toBe(styles.error);
  });

  it('renders header style correctly', () => {
    renderComponent(TextType.header);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toBe(styles.header);
  });
});
