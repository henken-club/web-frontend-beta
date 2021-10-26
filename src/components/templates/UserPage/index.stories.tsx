import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { PageContainer } from "~/components/layouts/Default";
import { mockAvatars } from "~/mocks/constraints";
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

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Primary.args = {
  user: {
    id: "1",
    alias: "user_1",
    displayName: "User 1",
    avatar: mockAvatars[1],
  },
};
