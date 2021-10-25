import { Meta, Story } from "@storybook/react";
import clsx from "clsx";
import React, { ComponentProps } from "react";

import { mockAvatars } from "~/mocks/constants";
import { View } from ".";

export default {
  title: "GlobalNav/Notification",
  component: View,
  argTypes: {},
  decorators: [(Story) => {
    return (
      <div className={clsx(["relative"])}>
        <div className={clsx(["absolute"], ["right-0"])}>
          <Story />
        </div>
      </div>
    );
  }],
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Active: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Active.storyName = "未読の通知がある";
Active.args = {
  hasUnread: true,
  notifications: [
    {
      type: "receivedHenken",
      value: {
        id: "n-rh-u",
        unread: true,
        comment: "Comment",
        createdAt: "2021-01-01T12:00:00",
        from: { id: "from", alias: "from", displayName: "From User", avatar: mockAvatars[1] },
      },
    },
    {
      type: "receivedAnswer",
      value: {
        id: "n-ra-u",
        unread: true,
        comment: "Comment",
        createdAt: "2021-01-01T12:00:00",
        from: { id: "from", alias: "from", displayName: "From User", avatar: mockAvatars[1] },
      },
    },
  ],
};

export const Inactive: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Inactive.storyName = "既読";
Inactive.args = {
  hasUnread: false,
  notifications: [
    {
      type: "receivedHenken",
      value: {
        id: "n-rh",
        unread: false,
        comment: "Comment",
        createdAt: "2021-01-01T12:00:00",
        from: { id: "from", alias: "from", displayName: "From User", avatar: mockAvatars[1] },
      },
    },
    {
      type: "receivedAnswer",
      value: {
        id: "n-ra-nu",
        unread: false,
        comment: "Comment",
        createdAt: "2021-01-01T12:00:00",
        from: { id: "from", alias: "from", displayName: "From User", avatar: mockAvatars[1] },
      },
    },
  ],
};
