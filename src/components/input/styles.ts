import {StyleSheet} from 'react-native';
import {colors} from '../../configs/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default styles;
