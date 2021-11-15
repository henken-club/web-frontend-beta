import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { WithAnswerView } from "./WithAnswer";

import { mockAvatars } from "~/mocks/constraints";

export default {
  title: "templates/HenkenPage/Timeline/ToComment/WithAnswer",
  component: WithAnswerView,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof WithAnswerView>;

export const Right: Story<StoryProps> = ({ ...props }) => {
  return <WithAnswerView {...props} />;
};
Right.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  comment: "はいじゃないが",
  type: "right",
};
Right.storyName = "正解";
Right.argTypes = {
  type: { table: { disable: true } },
};

export const Wrong: Story<StoryProps> = ({ ...props }) => {
  return <WithAnswerView {...props} />;
};
Wrong.storyName = "不正解";
Wrong.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  comment: "はいじゃないが",
  type: "wrong",
};
Wrong.argTypes = {
  type: { table: { disable: true } },
};

export const EmptyComment: Story<StoryProps> = ({ ...props }) => {
  return <WithAnswerView {...props} />;
};
EmptyComment.storyName = "コメント無し";
EmptyComment.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  comment: "",
  type: "right",
};
EmptyComment.argTypes = {
  comment: { table: { disable: true } },
};
