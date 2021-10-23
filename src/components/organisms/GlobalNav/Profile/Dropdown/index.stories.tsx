import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from ".";

export default {
  title: "GlobalNav/Profile/Dropdown",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Primary.args = {
  viewer: {
    id: "from",
    alias: "from",
    displayName: "From User",
    avatar: "/.mock/avatar_1.png",
  },
};
