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

export const LoggedIn: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
LoggedIn.storyName = "ログイン済み";
LoggedIn.args = {
  isLoggedIn: true,
};

export const NotLoggedIn: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
NotLoggedIn.storyName = "未ログイン";
NotLoggedIn.args = {
  isLoggedIn: false,
};
