import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from "./To";

export default {
  title: "HenkenPage/Header/Comment/To",
  component: View,
  argTypes: {
    type: { table: { disable: true } },
  },
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const None: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
None.storyName = "未回答";
None.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: "/.mock/avatar_2.png" },
};
None.argTypes = {
  comment: { table: { disable: true } },
  type: { table: { disable: true } },
};

export const Right: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Right.storyName = "正しかった";
Right.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: "/.mock/avatar_2.png" },
  comment: "はい",
  type: "right",
};

export const Wrong: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Wrong.storyName = "間違っていた";
Wrong.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: "/.mock/avatar_2.png" },
  comment: "いいえ",
  type: "wrong",
};

export const NoComment: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
NoComment.storyName = "コメントが空";
NoComment.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: "/.mock/avatar_2.png" },
  comment: "",
  type: "right",
};
NoComment.argTypes = {
  comment: { table: { disable: true } },
  type: { table: { disable: true } },
};
