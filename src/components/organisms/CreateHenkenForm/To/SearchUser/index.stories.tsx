import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { Component } from ".";

export default {
  title: "CreateHenkenForm/To/SearchUser",
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
    { id: "suggestion1", alias: "suggestion1", displayName: "Suggestion 1", avatar: "/.mock/avatar_3.png" },
    { id: "suggestion2", alias: "suggestion2", displayName: "Suggestion 2", avatar: "/.mock/avatar_4.png" },
    { id: "suggestion3", alias: "suggestion3", displayName: "Suggestion 3", avatar: "/.mock/avatar_5.png" },
    { id: "suggestion4", alias: "suggestion4", displayName: "Suggestion 4", avatar: "/.mock/avatar_6.png" },
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
