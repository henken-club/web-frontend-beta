import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { mockAvatars } from "~/mocks/constraints";
import { View } from ".";

export default {
  title: "templates/HenkenPage2/Timeline",
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
};
