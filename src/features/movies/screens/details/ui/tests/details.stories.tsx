import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import DetailsContainer from '..';
import {mockCardMovie} from '../../../../../../../__mocks__';
import {NavigationContainer} from '@react-navigation/native';

const DetailsContainerMeta: Meta<typeof DetailsContainer> = {
  title: 'Screens/Movies/Details',
  component: DetailsContainer,
  decorators: [
    Story => (
      <NavigationContainer>
        <Story />
      </NavigationContainer>
    ),
  ],
  args: {
    movie: mockCardMovie,
    genresMovie: [
      {id: 1, name: 'Action'},
      {id: 2, name: 'Adventure'},
    ],
  },
};

export default DetailsContainerMeta;

export const Default: StoryObj<typeof DetailsContainer> = {};
