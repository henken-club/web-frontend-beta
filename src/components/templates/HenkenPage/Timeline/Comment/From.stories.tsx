import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from "./From";

import { mockAvatars } from "~/mocks/constraints";

export default {
  title: "templates/HenkenPage/Timeline/From",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const FullComment: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
FullComment.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  isViewer: false,
  comment: "はい",
};

export const EmptyComment: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
EmptyComment.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  isViewer: false,
  comment: "",
};
EmptyComment.storyName = "コメントが空";
EmptyComment.argTypes = {
  comment: { table: { disable: true } },
};

export const IsViewer: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
IsViewer.storyName = "投稿者が自分";
IsViewer.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  isViewer: true,
  comment: "はい",
};
IsViewer.argTypes = {};
