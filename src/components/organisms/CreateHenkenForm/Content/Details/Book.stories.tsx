import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from "./Book";

import { mockBookcovers } from "~/mocks/constraints";

export default {
  title: "organisms/CreateHenkenForm/Content/Details/Book",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const HasImage: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
HasImage.args = {
  id: "book1",
  title: "タイトル",
  cover: mockBookcovers[1],
};

export const NoImage: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
NoImage.args = {
  id: "book1",
  title: "タイトル",
  cover: null,
};
