import { Meta, Story } from "@storybook/react";
import clsx from "clsx";
import React, { ComponentProps } from "react";

import { mockBookcovers } from "~/mocks/assets";
import { BookCover } from ".";

export default {
  title: "atoms/BookCover",
  component: BookCover,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof BookCover>;

export const HasImage: Story<StoryProps> = ({ ...props }) => {
  return <BookCover className={clsx(["w-32"])} {...props} />;
};
HasImage.storyName = "書影がある";
HasImage.args = {
  book: {
    title: "Title",
    cover: mockBookcovers["1"],
  },
};

export const NoImage: Story<StoryProps> = ({ ...props }) => {
  return <BookCover className={clsx(["w-32"])} {...props} />;
};
NoImage.storyName = "書影がない";
NoImage.args = {
  book: {
    title: "Title",
    cover: null,
  },
};
