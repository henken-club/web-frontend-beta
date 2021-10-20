import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps, ContextType } from "react";

import { CreateHenkenFormContext } from "./context";

import { Component } from ".";

export default {
  title: "CreateHenkenForm",
  component: Component,
  argTypes: {},
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
      avatar: "/.mock/avatar_1.png",
    },
    to: {
      id: "to",
      alias: "to",
      displayName: "To User",
      avatar: "/.mock/avatar_2.png",
    },
    setTo: action("set-to-user"),
    content: {
      type: "book",
      value: {
        id: "content_book1",
        title: "Book 1",
        cover: "/.mock/bookcover_1.jpg",
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
      avatar: "/.mock/avatar_1.png",
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
    from: { id: "from", alias: "from", displayName: "From User", avatar: "/.mock/avatar_1.png" },
    to: { id: "to", alias: "to", displayName: "To User", avatar: "/.mock/avatar_2.png" },
    setTo: action("set-to-user"),
    content: { type: "book", value: { id: "content_book1", title: "Book 1", cover: "/.mock/bookcover_1.jpg" } },
    setContent: action("set-content"),
    comment: "",
    setComment: action("set-comment"),
    createHenken: action("create-henken"),
    formDisabled: true,
    created: true,
  },
};
