import React from 'react';
import {View} from 'react-native';
import getStyles from './styles';
import Text, {TextType} from '../text';
import {colors} from '../../configs/theme';

const getAverageColor = (average: number) => {
  if (average <= 4) {
    return colors.error;
  } else if (average > 4 && average <= 7) {
    return colors.warning;
  } else {
    return colors.success;
  }
};

const VoteAverage = ({voteAverage}: {voteAverage: number}) => {
  const color = getAverageColor(voteAverage);

  return (
    <View style={getStyles(color).container} testID="average-container">
      <Text
        type={TextType.title}
        style={getStyles(color).average}
        testID="average-text">
        {voteAverage.toFixed(1)}
      </Text>
    </View>
  );
};

export default VoteAverage;
