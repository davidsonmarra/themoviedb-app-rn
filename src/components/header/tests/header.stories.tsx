import React from 'react';
import {StyleSheet} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {StorybookView} from '../..';
import Header from '..';
import {NavigationContainer} from '@react-navigation/native';
import {SearchIcon} from '../../../assets/icons';

const HeaderMeta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  args: {
    text: 'Header',
    showLeftIcon: true,
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

export default HeaderMeta;

export const Default: StoryObj<typeof Header> = {};

export const WithoutLeftIcon: StoryObj<typeof Header> = {
  args: {
    showLeftIcon: false,
  },
};

export const WithRightIcon: StoryObj<typeof Header> = {
  args: {
    rightIcon: () => <SearchIcon />,
  },
  argTypes: {
    rightIconAction: {action: 'clicked'},
  },
};
