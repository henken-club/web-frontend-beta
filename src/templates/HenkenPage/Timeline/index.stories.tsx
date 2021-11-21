import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { mockAvatars } from "~/mocks/constraints";
import { View } from ".";

export default {
  title: "templates/HenkenPage/Timeline",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View css={{ width: "480px" }} {...props} />;
};
Primary.storyName = "返答あり";
Primary.args = {
  comment: "はい",
  postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  answer: { comment: "はいじゃないが", type: "right" },
  viewer: null,
};

export const NoAnswer: Story<StoryProps> = ({ ...props }) => {
  return <View css={{ width: "480px" }} {...props} />;
};
NoAnswer.storyName = "返答無し";
NoAnswer.args = {
  comment: "はい",
  postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  answer: null,
  viewer: null,
};

export const PostedByYou: Story<StoryProps> = ({ ...props }) => {
  return <View css={{ width: "480px" }} {...props} />;
};
PostedByYou.storyName = "送り元が自分";
PostedByYou.args = {
  comment: "はい",
  postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  answer: { comment: "はいじゃないが", type: "right" },
  viewer: "from",
};

export const PostedToYou: Story<StoryProps> = ({ ...props }) => {
  return <View css={{ width: "480px" }} {...props} />;
};
PostedToYou.storyName = "送り先が自分かつ返答済み";
PostedToYou.args = {
  comment: "はい",
  postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  answer: { comment: "はいじゃないが", type: "right" },
  viewer: "to",
};

export const PostedToYouWithNoAnswer: Story<StoryProps> = ({ ...props }) => {
  return <View css={{ width: "480px" }} {...props} />;
};
PostedToYouWithNoAnswer.storyName = "送り先が自分かつ未回答";
PostedToYouWithNoAnswer.args = {
  comment: "はい",
  postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  answer: null,
  viewer: "to",
};
