import { Meta, Story } from "@storybook/react";
import clsx from "clsx";
import React, { ComponentProps } from "react";

import { View } from "./ReceivedHenken";

import { mockAvatars } from "~/mocks/constants";

export default {
  title: "GlobalNav/Notification/Dropdown/ReceivedHenken",
  component: View,
  argTypes: {},
  decorators: [(Story) => {
    return (
      <div className={clsx(["w-72"])}>
        <Story />
      </div>
    );
  }],
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Primary.args = {
  id: "n-ra-nu",
  unread: false,
  comment: "Comment",
  createdAt: "2021-01-01T12:00:00",
  from: { id: "from", alias: "from", displayName: "From User", avatar: mockAvatars[1] },
};

export const LongComment: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
LongComment.args = {
  id: "n-ra-nu",
  unread: false,
  comment: /* cspell:disable-next-line */
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt?",
  createdAt: "2021-01-01T12:00:00",
  from: { id: "from", alias: "from", displayName: "From User", avatar: mockAvatars[1] },
};
