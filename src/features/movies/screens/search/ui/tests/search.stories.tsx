import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SearchContainer from '..';
import {mockListMovie} from '../../../../../../../__mocks__';
import {NavigationContainer} from '@react-navigation/native';

const SearchContainerMeta: Meta<typeof SearchContainer> = {
  title: 'Screens/Movies/Search',
  component: SearchContainer,
  decorators: [
    Story => (
      <NavigationContainer>
        <Story />
      </NavigationContainer>
    ),
  ],
  args: {
    searchedMoviesData: mockListMovie,
    search: '',
    loadingFetchSearchMovies: false,
    onEndReached: action('onEndReached'),
    onPressMovie: action('onPressMovie'),
    onSearchMovies: action('onSearchMovies'),
    setSearch: action('setSearch'),
  },
};

export default SearchContainerMeta;

export const Default: StoryObj<typeof SearchContainerMeta> = {};
