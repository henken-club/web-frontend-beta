import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { mockAvatars } from "~/mocks/constants";
import { Component } from ".";

export default {
  title: "CreateHenkenForm/To",
  component: Component,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof Component>;

export const NotSelected: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
NotSelected.storyName = "ユーザーを選択していない";
NotSelected.args = { user: null };

export const Selected: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
Selected.storyName = "ユーザーを選択している";
Selected.args = {
  user: {
    id: "to",
    alias: "to",
    displayName: "To User",
    avatar: mockAvatars[2],
  },
};
