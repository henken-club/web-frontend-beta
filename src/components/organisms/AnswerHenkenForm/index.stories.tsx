import { Meta, Story } from "@storybook/react";
import React, { ComponentProps, ContextType } from "react";

import { AnswerHenkenFormContext } from "./context";

import { mockAvatars, mockBookcovers } from "~/mocks/constraints";
import { View } from ".";

export default {
  title: "organisms/AnswerHenkenForm",
  component: View,
  argTypes: {},
  parameters: {},
} as Meta;

type StoryProps = ComponentProps<typeof View> & { contextValue: ContextType<typeof AnswerHenkenFormContext>; };

export const Primary: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <AnswerHenkenFormContext.Provider value={contextValue}>
      <View {...props} />
    </AnswerHenkenFormContext.Provider>
  );
};
Primary.args = {
  contextValue: {
    henken: {
      id: "henken1",
      comment: "",
      from: {
        id: "from",
        alias: "from",
        displayName: "From",
        avatar: mockAvatars["1"],
      },
      to: {
        id: "from",
        alias: "from",
        displayName: "From",
        avatar: mockAvatars["1"],
      },
      content: {
        type: "book",
        value: { id: "1", title: "Book Title", cover: mockBookcovers["1"] },
      },
    },
  },
};
