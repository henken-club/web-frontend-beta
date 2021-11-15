import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { NoAnswerView } from "./NoAnswer";

import { mockAvatars } from "~/mocks/constraints";

export default {
  title: "templates/HenkenPage2/Timeline/ToComment/NoAnswer",
  component: NoAnswerView,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof NoAnswerView>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <NoAnswerView {...props} />;
};
Primary.args = {
  user: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
};
