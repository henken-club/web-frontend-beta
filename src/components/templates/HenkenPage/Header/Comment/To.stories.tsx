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
None.args = {};
None.argTypes = {
  comment: { table: { disable: true } },
  type: { table: { disable: true } },
};

export const Right: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Right.storyName = "正しかった";
Right.args = {
  comment: "はい",
  type: "right",
};

export const Wrong: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Wrong.storyName = "間違っていた";
Wrong.args = {
  comment: "いいえ",
  type: "wrong",
};

export const NoComment: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
NoComment.storyName = "コメントが空";
NoComment.args = {
  comment: "",
  type: "right",
};
NoComment.argTypes = {
  comment: { table: { disable: true } },
  type: { table: { disable: true } },
};
