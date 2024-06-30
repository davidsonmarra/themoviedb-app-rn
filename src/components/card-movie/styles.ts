import {StyleSheet} from 'react-native';
import {colors} from '../../configs/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: 8,
    marginBottom: 16,
  },
  image: {
    width: 188 / 2,
    height: 282 / 2,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  contentDescription: {
    flex: 1,
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.title,
  },
  cardDate: {
    fontSize: 14,
    color: colors.description,
  },
  cardOverview: {
    marginTop: 8,
    fontSize: 14,
    color: colors.text,
  },
});

export default styles;
