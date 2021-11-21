import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { UserToView } from "./To";

import { mockAvatars } from "~~/.mock/assets";

export default {
  title: "templates/HenkenPage/User/To",
  component: UserToView,
  argTypes: {
    isViewer: { table: { disable: true } },
  },
} as Meta;

type StoryProps = ComponentProps<typeof UserToView>;

export const Primary: Story<StoryProps> = ({ ...props }) => <UserToView {...props} />;
Primary.args = {
  user: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  isViewer: false,
};

export const IsViewer: Story<StoryProps> = ({ ...props }) => <UserToView {...props} />;
IsViewer.args = {
  user: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  isViewer: true,
};
