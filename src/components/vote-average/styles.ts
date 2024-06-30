import {StyleSheet} from 'react-native';

const getStyles = (color: string) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 64,
      height: 64,
      borderRadius: 32,
      borderWidth: 5,
      borderColor: color,
    },
    average: {
      color,
      fontSize: 28,
    },
  });

export default getStyles;
