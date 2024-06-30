import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import Input from '..';
import StorybookView from '../../storybook-view';

const InputMeta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onSearch: {action: 'pressed the button'},
  },
  args: {
    value: '',
    setValue: () => {},
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default InputMeta;

export const Default: StoryObj<typeof Input> = {};
