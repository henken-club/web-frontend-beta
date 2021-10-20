import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { Component } from "./SuggestionsList";

export default {
  title: "CreateHenkenForm/To/SearchUser/SuggestionsList",
  component: Component,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof Component>;

const commonProps: Partial<StoryProps> = {
  onSelect: action("select-user"),
};

export const HasSuggestion: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
HasSuggestion.storyName = "ユーザの提案がある";
HasSuggestion.args = {
  ...commonProps,
  suggestions: [{
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

export const NoSuggestions: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
NoSuggestions.storyName = "ユーザの提案が一件も無い";
NoSuggestions.args = {
  ...commonProps,
  suggestions: [],
};
