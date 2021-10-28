import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps, ContextType } from "react";

import { CreateHenkenFormContext } from "./context";

import { mockAvatars, mockBookcovers } from "~/mocks/constraints";
import { queryCreateHenkenFormSearchContent, queryCreateHenkenFormSearchUser } from "~/mocks/handlers";
import { Component } from ".";

export default {
  title: "organisms/CreateHenkenForm",
  component: Component,
  argTypes: {},
  parameters: {
    msw: [
      queryCreateHenkenFormSearchUser,
      queryCreateHenkenFormSearchContent,
    ],
  },
} as Meta;

type StoryProps = ComponentProps<typeof Component> & {
  contextValue: ContextType<typeof CreateHenkenFormContext>;
};

export const Primary: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
Primary.storyName = "通常";
Primary.args = {
  contextValue: {
    from: {
      id: "from",
      alias: "from",
      displayName: "From User",
      avatar: mockAvatars[1],
    },
    to: {
      id: "to",
      alias: "to",
      displayName: "To User",
      avatar: mockAvatars[2],
    },
    setTo: action("set-to-user"),
    content: {
      type: "book",
      value: {
        id: "content_book1",
        title: "Book 1",
        cover: mockBookcovers[1],
      },
    },
    setContent: action("set-content"),
    comment: "",
    setComment: action("set-comment"),
    createHenken: action("create-henken"),
    formDisabled: false,
    created: false,
  },
};

export const LoadingFrom: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
LoadingFrom.storyName = "ログインユーザを取得中";
LoadingFrom.args = {
  contextValue: {
    from: undefined,
    to: null,
    setTo: action("set-to-user"),
    content: null,
    setContent: action("set-content"),
    comment: "",
    setComment: action("set-comment"),
    createHenken: action("create-henken"),
    formDisabled: false,
    created: false,
  },
};

export const NoFrom: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
NoFrom.storyName = "未ログイン";
NoFrom.args = {
  contextValue: {
    from: null,
    to: null,
    setTo: action("set-to-user"),
    content: null,
    setContent: action("set-content"),
    comment: "",
    setComment: action("set-comment"),
    createHenken: action("create-henken"),
    formDisabled: false,
    created: false,
  },
};

export const NoTo: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
NoTo.storyName = "送り先を指定していない";
NoTo.args = {
  contextValue: {
    from: {
      id: "from",
      alias: "from",
      displayName: "From User",
      avatar: mockAvatars[1],
    },
    to: null,
    setTo: action("set-to-user"),
    content: null,
    setContent: action("set-content"),
    comment: "",
    setComment: action("set-comment"),
    createHenken: action("create-henken"),
    formDisabled: false,
    created: false,
  },
};

export const Created: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
Created.storyName = "作成済み";
Created.args = {
  created: true,
  contextValue: {
    from: { id: "from", alias: "from", displayName: "From User", avatar: mockAvatars[1] },
    to: { id: "to", alias: "to", displayName: "To User", avatar: mockAvatars[2] },
    setTo: action("set-to-user"),
    content: { type: "book", value: { id: "content_book1", title: "Book 1", cover: mockBookcovers[1] } },
    setContent: action("set-content"),
    comment: "",
    setComment: action("set-comment"),
    createHenken: action("create-henken"),
    formDisabled: true,
    created: true,
  },
};
