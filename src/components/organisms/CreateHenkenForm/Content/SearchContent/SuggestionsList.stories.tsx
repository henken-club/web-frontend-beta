import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { Component } from "./SuggestionsList";

import { mockBookcovers } from "~/mocks/resources";

export default {
  title: "CreateHenkenForm/Content/SearchContent/SuggestionsList",
  component: Component,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof Component>;

export const NoSuggestions: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
NoSuggestions.storyName = "検索結果が一件も無い";
NoSuggestions.args = {
  suggestions: [],
  onSelect: action("on-select"),
};

export const HaveSuggestions: Story<StoryProps> = ({ ...props }) => {
  return <Component {...props} />;
};
HaveSuggestions.storyName = "検索結果がある";
HaveSuggestions.args = {
  suggestions: [
    { type: "book", value: { id: "book1", title: "Book 1", cover: mockBookcovers[1] } },
    { type: "bookseries", value: { id: "bookseries1", title: "Book Series 1" } },
    { type: "author", value: { id: "author1", name: "Author 1" } },
  ],
  onSelect: action("on-select"),
};
