import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { NoAnswerView } from "./NoAnswer";

import { mockAvatars } from "~~/.mock/assets";

export default {
  title: "templates/HenkenPage/Timeline/ToComment/NoAnswer",
  component: NoAnswerView,
  argTypes: {
    isViewer: { table: { disable: true } },
  },
} as Meta;

type StoryProps = ComponentProps<typeof NoAnswerView>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <NoAnswerView {...props} />;
};
Primary.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  isViewer: false,
};

export const IsViewer: Story<StoryProps> = ({ ...props }) => {
  return <NoAnswerView {...props} />;
};
IsViewer.storyName = "投稿者が自分";
IsViewer.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  isViewer: true,
};
IsViewer.argTypes = {};
