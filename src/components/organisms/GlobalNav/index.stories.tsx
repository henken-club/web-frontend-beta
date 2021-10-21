import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from ".";

export default {
  title: "GlobalNav",
  component: View,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Primary.args = {};
