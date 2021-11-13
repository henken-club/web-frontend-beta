import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from "./BookSeries";

export default {
  title: "templates/HenkenPage/Timeline/Content/BookSeries",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Primary.args = {
  id: "bookseries_1",
  title: "BookSeries",
};
