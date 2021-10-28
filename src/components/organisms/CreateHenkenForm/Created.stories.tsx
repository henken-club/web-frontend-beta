import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { Component } from "./Created";

export default {
  title: "organisms/CreateHenkenForm/Created",
  component: Component,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof Component>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
Primary.args = {
  onClose: action("close-modal"),
};
