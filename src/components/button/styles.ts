import {StyleSheet} from 'react-native';
import {colors} from '../../configs/theme';

interface Props {
  isDisabled: boolean;
}

const getStyles = ({isDisabled}: Props) =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 8,
      borderRadius: 12,
      width: '100%',
      opacity: 1,
    },
    primary: {
      backgroundColor: isDisabled ? colors.disabled : colors.primary,
    },
    secondary: {},
  });

export default getStyles;
