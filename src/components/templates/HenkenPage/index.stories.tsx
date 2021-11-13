import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

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

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Primary.args = {
  henken: {
    id: "1",
    comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
    postedBy: {
      id: "1",
      alias: "user_1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    postsTo: {
      id: "2",
      alias: "user_2",
      displayName: "User 2",
      avatar: mockAvatars[2],
    },
    answer: {
      comment: "はいじゃないが",
      type: "right",
    },
    content: {
      type: "book",
      content: {
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
