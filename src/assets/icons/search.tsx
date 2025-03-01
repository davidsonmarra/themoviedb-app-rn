import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../configs/theme';

const SearchIcon = ({
  width = '24',
  height = '24',
  color = colors.buttonText,
}) => {
  return (
    <Svg width={width} height={height} fill={color} viewBox="0 -960 960 960">
      <Path d="M784-120L532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56zM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400z" />
    </Svg>
  );
};

export default SearchIcon;
