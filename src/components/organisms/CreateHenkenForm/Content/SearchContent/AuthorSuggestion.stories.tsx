import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { Component } from "./AuthorSuggestion";

export default {
  title: "CreateHenkenForm/Content/SearchContent/AuthorSuggestion",
  component: Component,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof Component>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
Primary.args = {
  name: "Name",
  onSelect: action("on-select"),
};
