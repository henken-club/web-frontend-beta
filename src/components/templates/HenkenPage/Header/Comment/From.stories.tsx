import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from "./From";

export default {
  title: "HenkenPage/Header/Comment/From",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Primary.args = {
  comment: "はい",
  user: { id: "1", alias: "user_1", displayName: "User 1", avatar: "/.mock/avatar_1.png" },
};

export const Empty: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Empty.storyName = "コメントが空";
Empty.args = {
  comment: "",
  user: { id: "1", alias: "user_1", displayName: "User 1", avatar: "/.mock/avatar_1.png" },
};
Empty.argTypes = {
  comment: { table: { disable: true } },
};
