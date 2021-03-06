import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { mockAvatars } from "~/mocks/assets";
import { View } from ".";

export default {
  title: "organisms/GlobalNav/Profile/Dropdown",
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
    avatar: mockAvatars[1],
  },
};
