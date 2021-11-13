import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { Component } from ".";

export default {
  title: "templates/UserPage",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof Component>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
Primary.args = {};
