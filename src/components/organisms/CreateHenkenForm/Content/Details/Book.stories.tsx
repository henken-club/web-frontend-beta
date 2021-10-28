import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from "./Book";

export default {
  title: "organisms/CreateHenkenForm/Content/Details/Book",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Primary.args = {
  id: "book1",
  title: "タイトル",
};
