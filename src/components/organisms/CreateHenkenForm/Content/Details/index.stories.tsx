import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { Component } from ".";

export default {
  title: "CreateHenkenForm/Content/Details",
  component: Component,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof Component>;

export const HasImage: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
HasImage.args = {
  title: "タイトル",
  image: "/.mock/bookcover_1.jpg",
};

export const NoImage: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
NoImage.args = { title: "タイトル" };
