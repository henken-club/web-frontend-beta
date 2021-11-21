import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from "./Book";

import { mockBookcovers } from "~~/.mock/assets";

export default {
  title: "templates/HenkenPage/Content/Book",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const HasBookcover: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
HasBookcover.storyName = "書影がある";
HasBookcover.args = {
  id: "book_1",
  title: "Book",
  cover: mockBookcovers[1],
  authors: [
    { id: "author_1", name: "著者1", role: null },
    { id: "author_2", name: "著者2", role: null },
  ],
};

export const NoBookCover: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
NoBookCover.storyName = "書影がない";
NoBookCover.args = {
  id: "book_1",
  title: "Book",
  cover: null,
  authors: [
    { id: "author_1", name: "著者1", role: null },
    { id: "author_2", name: "著者2", role: null },
  ],
};
