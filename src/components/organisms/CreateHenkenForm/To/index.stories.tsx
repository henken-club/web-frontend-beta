import { action } from "@storybook/addon-actions";
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
  onChangeSearchBox: action("update-search-user-query"),
  onFocusSearchBox: action("focus-searchbox"),
  onBlurSearchBox: action("blur-searchbox"),
  onSelectSuggestion: action("select-user"),
};

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
Primary.args = { ...commonProps };

export const HasSuggestion: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
HasSuggestion.storyName = "ユーザの提案を表示中";
HasSuggestion.args = {
  ...commonProps,
  focusSearchBox: true,
  userSuggestions: [{
    id: "suggestion1",
    alias: "suggestion1",
    displayName: "Suggestion 1",
    avatar: "/.mock/avatar_3.png",
  }, {
    id: "suggestion2",
    alias: "suggestion2",
    displayName: "Suggestion 2",
    avatar: "/.mock/avatar_4.png",
  }, {
    id: "suggestion3",
    alias: "suggestion3",
    displayName: "Suggestion 3",
    avatar: "/.mock/avatar_5.png",
  }, {
    id: "suggestion4",
    alias: "suggestion4",
    displayName: "Suggestion 4",
    avatar: "/.mock/avatar_6.png",
  }],
};

export const HasNoSuggestion: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
HasNoSuggestion.storyName = "ユーザの提案が一件も無い旨を表示中";
HasNoSuggestion.args = {
  ...commonProps,
  focusSearchBox: true,
  userSuggestions: [],
};
