import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { View } from "./Author";

export default {
  title: "HenkenPage/Timeline/Content/Author",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Primary.args = {
  id: "author_1",
  name: "Author",
};
