import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { mockBookcovers } from "~/mocks/resources";
import { Component } from ".";

export default {
  title: "CreateHenkenForm/Content/SearchContent",
  component: Component,
  argTypes: {
    focus: { table: { disable: true } },
    suggestions: { table: { disable: true } },
  },
} as Meta;

type StoryProps = ComponentProps<typeof Component>;

const commonProps: Partial<StoryProps> = {
  onBlur: action("on-blur"),
  onFocus: action("on-focus"),
  onUpdateInput: action("on-update-input"),
  onSelectSuggestion: action("on-select-suggestion"),
};

export const NotFocusing: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
NotFocusing.storyName = "フォーカスしていない";
NotFocusing.args = {
  ...commonProps,
  focus: false,
  searching: false,
  suggestions: [],
};

export const FocusingWithNoSuggestions: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
FocusingWithNoSuggestions.storyName = "検索結果が一件も無い状態でフォーカス";
FocusingWithNoSuggestions.args = {
  ...commonProps,
  focus: true,
  searching: false,
  suggestions: [],
};

export const FocusingWithSuggestions: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
FocusingWithSuggestions.storyName = "検索結果がある状態でフォーカス";
FocusingWithSuggestions.args = {
  ...commonProps,
  focus: true,
  searching: false,
  suggestions: [
    { type: "book", value: { id: "book1", title: "Book 1", cover: mockBookcovers[1] } },
    { type: "bookseries", value: { id: "bookseries1", title: "Book Series 1" } },
    { type: "author", value: { id: "author1", name: "Author 1" } },
  ],
};

export const Searching: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
Searching.storyName = "検索中";
Searching.args = {
  ...commonProps,
  focus: false,
  searching: true,
  suggestions: [],
};
