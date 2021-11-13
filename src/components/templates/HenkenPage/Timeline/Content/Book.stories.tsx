import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from "./Book";

import { mockBookcovers } from "~/mocks/constraints";

export default {
  title: "templates/HenkenPage/Timeline/Content/Book",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Primary.args = {
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
