import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {colors} from '../../configs/theme';

const BackIcon = ({width = '24', height = '24', fill = colors.buttonText}) => {
  return (
    <Svg width={width} height={height} fill={fill} viewBox="0 -960 960 960">
      <Path d="M359-242L120-481l239-239 43 43-166 166h604v60H236l166 166-43 43z" />
    </Svg>
  );
};

export default BackIcon;
