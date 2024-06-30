import React from 'react';
import {StyleSheet} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {NavigationContainer} from '@react-navigation/native';
import {StorybookView} from '../..';
import CardMovie from '..';
import {mockCardMovie} from '../../../../__mocks__';

const CardMovieMeta: Meta<typeof CardMovie> = {
  title: 'Components/CardMovie',
  component: CardMovie,
  argTypes: {
    onPressCard: {action: 'pressed the card'},
  },
  args: {
    movie: mockCardMovie,
  },
  decorators: [
    Story => (
      <NavigationContainer>
        <StorybookView>
          <Story />
        </StorybookView>
      </NavigationContainer>
    ),
  ],
};

export default CardMovieMeta;

export const Default: StoryObj<typeof CardMovie> = {};
