import {StyleSheet} from 'react-native';
import {colors} from '../../../../../configs/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.overlay,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  logoImage: {
    width: 120,
    height: 86.33,
    marginHorizontal: 'auto',
  },
});

export default styles;
