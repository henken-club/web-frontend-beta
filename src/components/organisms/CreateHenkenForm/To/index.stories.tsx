import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { Component } from ".";

export default {
  title: "CreateHenkenForm/To",
  component: Component,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof Component>;

const commonProps: Partial<StoryProps> = {
  user: {
    id: "to",
    alias: "to",
    displayName: "To User",
    avatar: "/.mock/avatar_2.png",
  },
};

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
Primary.args = { ...commonProps };
