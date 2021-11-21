import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { ListItem } from "./ListItem";

import { mockAvatars, mockBookcovers } from "~/mocks/constraints";

export default {
  title: "Templates/UserPage/Section/HenkenList/ListItem",
  component: ListItem,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof ListItem>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <ListItem {...props} />;
};
Primary.args = {
  type: "post-henkens",
  henken: {
    id: "henken1",
    comment: "テスト",
    postedBy: {
      id: "user1",
      alias: "user_1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    postTo: {
      id: "user2",
      alias: "user_2",
      displayName: "User 2",
      avatar: mockAvatars[2],
    },
    answer: { type: "right", comment: "テスト" },
    content: {
      type: "book",
      content: {
        id: "book1",
        title: "虐殺器官",
        cover: mockBookcovers[1],
      },
    },
  },
};

export const EmptyComment: Story<StoryProps> = ({ ...props }) => {
  return <ListItem {...props} />;
};
EmptyComment.args = {
  type: "post-henkens",
  henken: {
    id: "henken1",
    comment: "",
    postedBy: {
      id: "user1",
      alias: "user_1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    postTo: {
      id: "user2",
      alias: "user_2",
      displayName: "User 2",
      avatar: mockAvatars[2],
    },
    answer: { type: "right", comment: "テスト" },
    content: {
      type: "book",
      content: {
        id: "book1",
        title: "虐殺器官",
        cover: mockBookcovers[1],
      },
    },
  },
};

export const NoAnswer: Story<StoryProps> = ({ ...props }) => {
  return <ListItem {...props} />;
};
NoAnswer.storyName = "未回答";
NoAnswer.args = {
  type: "post-henkens",
  henken: {
    id: "henken1",
    comment: "テスト",
    postedBy: {
      id: "user1",
      alias: "user_1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    postTo: {
      id: "user2",
      alias: "user_2",
      displayName: "User 2",
      avatar: mockAvatars[2],
    },
    answer: null,
    content: {
      type: "book",
      content: {
        id: "book1",
        title: "虐殺器官",
        cover: mockBookcovers[1],
      },
    },
  },
};

export const Book: Story<StoryProps> = ({ ...props }) => {
  return <ListItem {...props} />;
};
Book.storyName = "本";
Book.args = {
  type: "post-henkens",
  henken: {
    id: "henken1",
    comment: "テスト",
    postedBy: {
      id: "user1",
      alias: "user_1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    postTo: {
      id: "user2",
      alias: "user_2",
      displayName: "User 2",
      avatar: mockAvatars[2],
    },
    answer: { type: "right", comment: "テスト" },
    content: {
      type: "book",
      content: {
        id: "book1",
        title: "虐殺器官",
        cover: mockBookcovers[1],
      },
    },
  },
};

export const Author: Story<StoryProps> = ({ ...props }) => {
  return <ListItem {...props} />;
};
Author.storyName = "著者";
Author.args = {
  type: "post-henkens",
  henken: {
    id: "henken1",
    comment: "テスト",
    postedBy: {
      id: "user1",
      alias: "user_1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    postTo: {
      id: "user2",
      alias: "user_2",
      displayName: "User 2",
      avatar: mockAvatars[2],
    },
    answer: { type: "right", comment: "テスト" },
    content: {
      type: "author",
      content: {
        id: "author1",
        name: "伊藤計劃",
      },
    },
  },
};

export const BookSeries: Story<StoryProps> = ({ ...props }) => {
  return <ListItem {...props} />;
};
BookSeries.storyName = "本のシリーズ";
BookSeries.args = {
  type: "post-henkens",
  henken: {
    id: "henken1",
    comment: "テスト",
    postedBy: {
      id: "user1",
      alias: "user_1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    postTo: {
      id: "user2",
      alias: "user_2",
      displayName: "User 2",
      avatar: mockAvatars[2],
    },
    answer: { type: "right", comment: "テスト" },
    content: {
      type: "bookseries",
      content: {
        id: "bookseries1",
        title: "それでも町は廻っている",
      },
    },
  },
};
