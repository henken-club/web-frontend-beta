import { Meta, Story } from "@storybook/react";
import React, { ComponentProps, ContextType } from "react";

import { HenkenPageContext } from "./types";

import { PageContainer } from "~/components/layouts/Default";
import { mockAvatars, mockBookcovers } from "~/mocks/constraints";
import { View } from ".";

export default {
  title: "templates/HenkenPage",
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

type StoryProps = ComponentProps<typeof View> & { contextValue: ContextType<typeof HenkenPageContext>; };

export const ContentIsBook: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
ContentIsBook.storyName = "コンテンツがBookである場合";
ContentIsBook.args = {
  henken: {
    id: "1",
    comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
    postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
    postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
    answer: { comment: "はいじゃないが", type: "right" },
    content: {
      type: "book",
      value: {
        id: "book_1",
        title: "アー",
        cover: mockBookcovers[1],
        authors: [
          { id: "author_1", name: "著者1", role: null },
          { id: "author_2", name: "著者2", role: null },
        ],
      },
    },
  },
};

export const ContentIsAuthor: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
ContentIsAuthor.storyName = "コンテンツがAuthorである場合";
ContentIsAuthor.args = {
  henken: {
    id: "1",
    comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
    postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
    postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
    answer: { comment: "はいじゃないが", type: "right" },
    content: {
      type: "author",
      value: {
        id: "author_1",
        name: "伊藤計劃",
      },
    },
  },
};

export const ContentIsBookSeries: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
ContentIsBookSeries.storyName = "コンテンツがBookSeriesである場合";
ContentIsBookSeries.args = {
  henken: {
    id: "1",
    comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
    postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
    postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
    answer: { comment: "はいじゃないが", type: "right" },
    content: {
      type: "bookseries",
      value: {
        id: "bookseries_1",
        title: "それでも町は廻っている",
      },
    },
  },
};

export const ContentIsTempContentBook: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
ContentIsTempContentBook.storyName = "コンテンツがTempContent(Book)である場合";
ContentIsTempContentBook.args = {
  henken: {
    id: "1",
    comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
    postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
    postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
    answer: { comment: "はいじゃないが", type: "right" },
    content: {
      type: "tempContent",
      value: {
        id: "temp_1",
        name: "仮コンテンツ(本)",
        type: "book",
      },
    },
  },
};

export const ContentIsTempContentAuthor: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
ContentIsTempContentAuthor.storyName = "コンテンツがTempContent(Author)である場合";
ContentIsTempContentAuthor.args = {
  henken: {
    id: "1",
    comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
    postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
    postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
    answer: { comment: "はいじゃないが", type: "right" },
    content: {
      type: "tempContent",
      value: {
        id: "temp_2",
        name: "仮コンテンツ(著者)",
        type: "author",
      },
    },
  },
};

export const ContentIsTempContentBookSeries: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
ContentIsTempContentBookSeries.storyName = "コンテンツがTempContent(BookSeries)である場合";
ContentIsTempContentBookSeries.args = {
  henken: {
    id: "1",
    comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
    postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
    postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
    answer: { comment: "はいじゃないが", type: "right" },
    content: {
      type: "tempContent",
      value: {
        id: "temp_3",
        name: "仮コンテンツ(本のシリーズ)",
        type: "bookseries",
      },
    },
  },
};
