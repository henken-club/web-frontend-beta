import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { UserFromView } from "./From";

import { mockAvatars } from "~/mocks/assets";

export default {
  title: "templates/HenkenPage/User/From",
  component: UserFromView,
  argTypes: {
    isViewer: { table: { disable: true } },
  },
} as Meta;

type StoryProps = ComponentProps<typeof UserFromView>;

export const Primary: Story<StoryProps> = ({ ...props }) => <UserFromView {...props} />;
Primary.args = {
  user: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  isViewer: false,
};

export const IsViewer: Story<StoryProps> = ({ ...props }) => <UserFromView {...props} />;
IsViewer.args = {
  user: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  isViewer: true,
};
