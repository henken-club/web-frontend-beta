import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { PageContainer } from "~/layouts/Default";
import { c } from "~/mocks/constraints";
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
  alias: c.users.user1.alias,
  displayName: c.users.user1.displayName,
  avatar: c.users.user1.avatar,
};
