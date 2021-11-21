import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps, ContextType } from "react";
import { RecoilRoot } from "recoil";

import { CreateHenkenFormContext } from "../context";

import { mockAvatars, mockBookcovers } from "~~/.mock/assets";
import { Component } from ".";

export default {
  title: "organisms/CreateHenkenForm/Created",
  component: Component,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof Component> & {
  contextValue: ContextType<typeof CreateHenkenFormContext>;
};

export const Primary: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <RecoilRoot>
      <CreateHenkenFormContext.Provider value={contextValue}>
        <Component {...props} />
      </CreateHenkenFormContext.Provider>
    </RecoilRoot>
  );
};
Primary.args = {
  contextValue: {
    from: {
      id: "viewer",
      alias: "viewer",
      displayName: "Viewer",
      avatar: mockAvatars.viewer,
    },
    to: {
      id: "user1",
      alias: "user_1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    content: {
      type: "book",
      value: {
        id: "book1",
        title: "虐殺器官",
        cover: mockBookcovers[1],
      },
    },
    comment: "",
    setContent: action("set-content"),
    setTo: action("set-to-user"),
    setComment: action("set-comment"),
    createHenken: null,
    created: { id: "created" },
  },
};
