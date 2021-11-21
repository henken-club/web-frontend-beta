import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps, ContextType } from "react";
import { RecoilRoot } from "recoil";

import { CreateHenkenFormContext } from "./context";

import { c } from "~/mocks/constraints";
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
    to: { id: "to", ...c.users.user1 },
    content: { type: "book", value: { id: "book1", ...c.books.book1 } },
    comment: "",
    setContent: action("set-content"),
    setTo: action("set-to-user"),
    setComment: action("set-comment"),
    createHenken: null,
    created: null,
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
    to: { id: "to", ...c.users.user1 },
    content: { type: "book", value: { id: "book1", ...c.books.book1 } },
    comment: "",
    setContent: action("set-content"),
    setTo: action("set-to-user"),
    setComment: action("set-comment"),
    createHenken: null,
    created: null,
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
    from: { id: "from", ...c.users.viewer },
    to: null,
    content: { type: "book", value: { id: "book1", ...c.books.book1 } },
    comment: "",
    setContent: action("set-content"),
    setTo: action("set-to-user"),
    setComment: action("set-comment"),
    createHenken: null,
    created: null,
  },
};

export const Creatable: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
Creatable.storyName = "送信可能";
Creatable.args = {
  contextValue: {
    from: { id: "from", ...c.users.viewer },
    to: { id: "to", ...c.users.user1 },
    content: { type: "book", value: { id: "book1", ...c.books.book1 } },
    comment: "",
    setContent: action("set-content"),
    setTo: action("set-to-user"),
    setComment: action("set-comment"),
    createHenken: action("create-henken"),
    created: null,
  },
};

export const Created: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <RecoilRoot>
      <CreateHenkenFormContext.Provider value={contextValue}>
        <Component {...props} />
      </CreateHenkenFormContext.Provider>
    </RecoilRoot>
  );
};
Created.storyName = "送信済み";
Created.args = {
  contextValue: {
    from: { id: "from", ...c.users.viewer },
    to: { id: "to", ...c.users.user1 },
    content: { type: "book", value: { id: "book1", ...c.books.book1 } },
    comment: "",
    setContent: action("set-content"),
    setTo: action("set-to-user"),
    setComment: action("set-comment"),
    createHenken: null,
    created: { id: "created" },
  },
};
