import { Meta, Story } from "@storybook/react";
import clsx from "clsx";
import React, { ComponentProps } from "react";

import { PageContainer } from "~/components/layouts/Default";
import { View } from ".";

export default {
  title: "HenkenPage/Header",
  component: View,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Book: Story<StoryProps> = ({ ...props }) => {
  return <View className={clsx(["w-full"])} {...props} />;
};
Book.storyName = "Book";
Book.args = {
  comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
  postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: "/.mock/avatar_1.png" },
  postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: "/.mock/avatar_2.png" },
  content: {
    type: "book",
    content: {
      id: "book_1",
      title: "Book",
      cover: "/.mock/bookcover_1.jpg",
    },
  },
};

export const BookSeries: Story<StoryProps> = ({ ...props }) => {
  return <View className={clsx(["w-full"])} {...props} />;
};
BookSeries.storyName = "BookSeries";
BookSeries.args = {
  comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
  postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: "/.mock/avatar_1.png" },
  postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: "/.mock/avatar_2.png" },
  content: {
    type: "bookseries",
    content: {
      id: "bookseries_1",
      title: "BookSeries",
    },
  },
};

export const Author: Story<StoryProps> = ({ ...props }) => {
  return <View className={clsx(["w-full"])} {...props} />;
};
Author.storyName = "Author";
Author.args = {
  comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
  postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: "/.mock/avatar_1.png" },
  postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: "/.mock/avatar_2.png" },
  content: {
    type: "author",
    content: {
      id: "author_1",
      name: "Author",
    },
  },
};