import {StyleSheet} from 'react-native';
import {colors} from '../../configs/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    backgroundColor: colors.primary,
  },
  icon: {
    width: 24,
  },
  text: {
    flex: 1,
    textAlign: 'center',
  },
});

export default styles;
