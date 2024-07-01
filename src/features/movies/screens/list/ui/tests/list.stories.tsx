import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import ListContainer from '..';
import {mockListMovie} from '../../../../../../../__mocks__';
import {NavigationContainer} from '@react-navigation/native';

const ListContainerMeta: Meta<typeof ListContainer> = {
  title: 'Screens/Movies/List',
  component: ListContainer,
  decorators: [
    Story => (
      <NavigationContainer>
        <Story />
      </NavigationContainer>
    ),
  ],
  args: {
    moviesData: mockListMovie,
    loadingFetchMovies: false,
    onEndReached: action('onEndReached'),
    onPressMovie: action('onPressMovie'),
    onSearch: action('onSearch'),
  },
};

export default ListContainerMeta;

export const Default: StoryObj<typeof ListContainerMeta> = {};
