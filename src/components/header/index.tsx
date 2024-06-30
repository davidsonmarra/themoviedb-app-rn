import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {HorizontalSpacer, Text, TextType} from '..';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {BackIcon} from '../../assets/icons';

export interface Props {
  text?: string;
  onBack?: () => void;
  showLeftIcon?: boolean;
}

const Header = ({text, onBack, showLeftIcon = true}: Props) => {
  const {goBack} = useNavigation();
  if (!onBack) {
    onBack = goBack;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={onBack}
        testID="back-button">
        {showLeftIcon && <BackIcon />}
      </TouchableOpacity>
      <HorizontalSpacer width={12} />
      {text && (
        <Text style={styles.text} type={TextType.overlayTitle}>
          {text}
        </Text>
      )}
      <HorizontalSpacer width={12} />
      <View style={styles.icon} />
    </View>
  );
};

export default Header;
