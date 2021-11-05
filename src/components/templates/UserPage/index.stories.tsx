import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { PageContainer } from "~/components/layouts/Default";
import { mockAvatars, mockBookcovers } from "~/mocks/constraints";
import { View } from ".";

export default {
  title: "Templates/UserPage",
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

export const ReceivedHenkens: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
ReceivedHenkens.storyName = "送られてきた偏見";
ReceivedHenkens.args = {
  user: {
    id: "user1",
    alias: "user_1",
    displayName: "User 1",
    avatar: mockAvatars[1],
    receivedHenkens: {
      totalCount: 4,
      pageInfo: { endCursor: "cursor", hasNextPage: false },
      nodes: [
        {
          id: "henken1",
          comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
          postedBy: {
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
        {
          id: "henken2",
          comment: "読んでるんだろ？",
          postedBy: {
            id: "user3",
            alias: "user_3",
            displayName: "User 3",
            avatar: mockAvatars[3],
          },
          answer: {
            comment: "いえ…",
            type: "right",
          },
          content: {
            type: "book",
            content: {
              id: "book2",
              title: "銃・病原菌・鉄",
              cover: mockBookcovers[1],
            },
          },
        },
        {
          id: "henken3",
          comment: "テスト",
          postedBy: {
            id: "user4",
            alias: "user_4",
            displayName: "User 4",
            avatar: mockAvatars[4],
          },
          answer: null,
          content: {
            type: "author",
            content: {
              id: "author1",
              name: "伊藤計劃",
            },
          },
        },
        {
          id: "henken4",
          comment: "テスト",
          postedBy: {
            id: "user5",
            alias: "user_4",
            displayName: "User 5",
            avatar: mockAvatars[5],
          },
          answer: null,
          content: {
            type: "bookseries",
            content: {
              id: "bookseries1",
              title: "それでも町は廻っている",
            },
          },
        },
      ],
    },
  },
};

export const SendHenkens: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
SendHenkens.storyName = "送った偏見";
SendHenkens.args = {
  user: {
    id: "user1",
    alias: "user_1",
    displayName: "User 1",
    avatar: mockAvatars[1],
    postHenkens: {
      totalCount: 4,
      pageInfo: { endCursor: "cursor", hasNextPage: false },
      nodes: [
        {
          id: "henken1",
          comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
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
        {
          id: "henken2",
          comment: "読んでるんだろ？",
          postTo: {
            id: "user3",
            alias: "user_3",
            displayName: "User 3",
            avatar: mockAvatars[3],
          },
          answer: {
            comment: "いえ…",
            type: "right",
          },
          content: {
            type: "book",
            content: {
              id: "book2",
              title: "銃・病原菌・鉄",
              cover: mockBookcovers[1],
            },
          },
        },
        {
          id: "henken3",
          comment: "テスト",
          postTo: {
            id: "user4",
            alias: "user_4",
            displayName: "User 4",
            avatar: mockAvatars[4],
          },
          answer: null,
          content: {
            type: "author",
            content: {
              id: "author1",
              name: "伊藤計劃",
            },
          },
        },
        {
          id: "henken4",
          comment: "テスト",
          postTo: {
            id: "user5",
            alias: "user_4",
            displayName: "User 5",
            avatar: mockAvatars[5],
          },
          answer: null,
          content: {
            type: "bookseries",
            content: {
              id: "bookseries1",
              title: "それでも町は廻っている",
            },
          },
        },
      ],
    },
  },
};
