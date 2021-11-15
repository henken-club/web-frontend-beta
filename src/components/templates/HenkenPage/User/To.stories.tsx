import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { UserToView } from "./To";

import { mockAvatars } from "~/mocks/constraints";

export default {
  title: "templates/HenkenPage/User/To",
  component: UserToView,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof UserToView>;

export const Primary: Story<StoryProps> = ({ ...props }) => <UserToView {...props} />;
Primary.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
};
