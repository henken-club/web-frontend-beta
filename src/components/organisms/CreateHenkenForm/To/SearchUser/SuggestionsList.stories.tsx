import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { Component } from "./SuggestionsList";

import { mockAvatars } from "~/mocks/constants";

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
    avatar: mockAvatars[3],
  }, {
    id: "suggestion2",
    alias: "suggestion2",
    displayName: "Suggestion 2",
    avatar: mockAvatars[4],
  }, {
    id: "suggestion3",
    alias: "suggestion3",
    displayName: "Suggestion 3",
    avatar: mockAvatars[5],
  }, {
    id: "suggestion4",
    alias: "suggestion4",
    displayName: "Suggestion 4",
    avatar: mockAvatars[6],
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
