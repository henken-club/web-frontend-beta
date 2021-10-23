import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from "./Book";

export default {
  title: "HenkenPage/Header/Content/Book",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Primary.args = {
  id: "book_1",
  title: "Book",
  cover: "/.mock/bookcover_1.jpg",
};
