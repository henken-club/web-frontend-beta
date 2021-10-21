import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from ".";

export default {
  title: "GlobalNav/Notification/Dropdown",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const HaveNotifications: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
HaveNotifications.storyName = "通知が存在する";
HaveNotifications.args = {
  notifications: [
    {
      type: "receivedHenken",
      value: {
        id: "n-rh",
        unread: false,
        comment: "Comment",
        createdAt: "2021-01-01T12:00:00",
        from: { id: "from", alias: "from", displayName: "From User", avatar: "/.mock/avatar_1.png" },
      },
    },
    {
      type: "receivedHenken",
      value: {
        id: "n-rh-u",
        unread: true,
        comment: "Comment",
        createdAt: "2021-01-01T12:00:00",
        from: { id: "from", alias: "from", displayName: "From User", avatar: "/.mock/avatar_1.png" },
      },
    },
    {
      type: "receivedAnswer",
      value: {
        id: "n-ra-nu",
        unread: false,
        comment: "Comment",
        createdAt: "2021-01-01T12:00:00",
        from: { id: "from", alias: "from", displayName: "From User", avatar: "/.mock/avatar_1.png" },
      },
    },
    {
      type: "receivedAnswer",
      value: {
        id: "n-ra-u",
        unread: true,
        comment: "Comment",
        createdAt: "2021-01-01T12:00:00",
        from: { id: "from", alias: "from", displayName: "From User", avatar: "/.mock/avatar_1.png" },
      },
    },
  ],
};

export const NoNotifications: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
NoNotifications.storyName = "一件も通知がない";
NoNotifications.args = {
  notifications: [],
};
