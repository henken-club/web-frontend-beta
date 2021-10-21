import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { Component } from ".";

export default {
  title: "CreateHenkenForm/From",
  component: Component,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof Component>;

export const Loading: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
Loading.storyName = "ユーザーロード中";
Loading.args = {
  user: undefined,
};

export const NotLoggedIn: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
NotLoggedIn.storyName = "未ログイン";
NotLoggedIn.args = { user: null };

export const LoggedIn: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
LoggedIn.storyName = "ログイン済み";
LoggedIn.args = {
  user: {
    id: "from",
    alias: "from",
    displayName: "From User",
    avatar: "/.mock/avatar_1.png",
  },
};