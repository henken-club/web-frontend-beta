import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from "./TempContent";

export default {
  title: "templates/HenkenPage2/Content/TempContent",
  component: View,
  argTypes: {
    type: { table: { disable: true } },
  },
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Book: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Book.args = {
  id: "temp_1",
  name: "仮コンテンツ(本)",
  type: "book",
};

export const Author: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Author.args = {
  id: "temp_2",
  name: "仮コンテンツ(著者)",
  type: "author",
};

export const BookSeries: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
BookSeries.args = {
  id: "temp_3",
  name: "仮コンテンツ(本のシリーズ)",
  type: "bookseries",
};
