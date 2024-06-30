import React from 'react';
import {StyleSheet} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {StorybookView} from '../..';
import VoteAverage from '..';
import {NavigationContainer} from '@react-navigation/native';

const VoteAverageMeta: Meta<typeof VoteAverage> = {
  title: 'Components/VoteAverage',
  component: VoteAverage,
  args: {
    voteAverage: 5,
  },
  decorators: [
    Story => (
      <NavigationContainer>
        <StorybookView style={styles.container}>
          <Story />
        </StorybookView>
      </NavigationContainer>
    ),
  ],
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 0},
});

export default VoteAverageMeta;

export const Default: StoryObj<typeof VoteAverage> = {};

export const GoodAverage: StoryObj<typeof VoteAverage> = {
  args: {
    voteAverage: 8,
  },
};

export const BadAverage: StoryObj<typeof VoteAverage> = {
  args: {
    voteAverage: 3,
  },
};
