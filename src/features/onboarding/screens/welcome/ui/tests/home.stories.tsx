import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import WelcomeContainer from '..';

const WelcomeContainerMeta: Meta<typeof WelcomeContainer> = {
  title: 'Screens/Onboarding/Welcome',
  component: WelcomeContainer,
  decorators: [Story => <Story />],
  args: {
    onPressContinue: action('onPressContinue'),
  },
};

export default WelcomeContainerMeta;

export const Default: StoryObj<typeof WelcomeContainer> = {};
