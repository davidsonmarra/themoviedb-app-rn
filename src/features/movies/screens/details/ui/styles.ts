import {StyleSheet} from 'react-native';
import {colors} from '../../../../../configs/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: colors.overlayDark,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    color: colors.buttonText,
    marginBottom: 8,
    textAlign: 'center',
  },
  containerInfo: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  containerGenres: {
    flexDirection: 'row',
  },
  subtitle: {
    marginBottom: 8,
  },
  average: {
    marginTop: 24,
    marginHorizontal: 'auto',
  },
});

export default styles;
