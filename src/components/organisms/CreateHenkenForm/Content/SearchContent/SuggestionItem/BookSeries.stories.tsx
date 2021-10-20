import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { Component } from "./BookSeries";

export default {
  title: "CreateHenkenForm/Content/SearchContent/BookSeriesSuggestion",
  component: Component,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof Component>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
Primary.args = {
  title: "Title",
  onSelect: action("on-select"),
};