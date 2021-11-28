import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { PageContainer } from "~/layouts/Default";
import { mockAvatars } from "~/mocks/assets";
import { View } from ".";

export default {
  title: "Templates/UserPage/Header",
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
  id: "user1",
  alias: "user1",
  displayName: "User 1",
  avatar: mockAvatars[1],
};
