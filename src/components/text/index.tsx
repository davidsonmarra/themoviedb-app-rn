import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import styles from './styles';

export enum TextType {
  title = 'title',
  text = 'text',
  textBold = 'textBold',
  buttonPrimary = 'buttonPrimary',
  buttonSecondary = 'buttonSecondary',
  label = 'label',
  error = 'error',
  header = 'header',
  overlayTitle = 'overlayTitle',
  overlayText = 'overlayText',
}

interface Props extends TextProps {
  type: TextType;
}

const textStyle = {
  [TextType.title]: styles.title,
  [TextType.text]: styles.text,
  [TextType.textBold]: styles.textBold,
  [TextType.buttonPrimary]: styles.buttonPrimary,
  [TextType.buttonSecondary]: styles.buttonSecondary,
  [TextType.label]: styles.label,
  [TextType.error]: styles.error,
  [TextType.header]: styles.header,
  [TextType.overlayTitle]: styles.overlayTitle,
  [TextType.overlayText]: styles.overlayText,
};

const Text = ({children, type, style, ...rest}: Props) => {
  return (
    <RNText style={[textStyle[type], style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
